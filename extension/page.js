
function CaptureScreenshot() {

	var appendixTitle = "screenshot.png";

	var title;

	var headerEls = document.querySelectorAll("h1.title");

	function SetTitle() {
		if (headerEls.length > 0) {
			title = headerEls[0].innerText.trim() + " " + appendixTitle;
			return true;
		} else {
			return false;
		}
	}
	
	if (SetTitle() == false) {
		headerEls = document.querySelectorAll("h1.watch-title-container");

		if (SetTitle() == false)
			title = appendixTitle;
	}

	var player = document.getElementsByClassName("video-stream")[0];
	var canvas = document.createElement("canvas");
	canvas.width = player.videoWidth;
	canvas.height = player.videoHeight;
	canvas.getContext('2d').drawImage(player, 0, 0, canvas.width, canvas.height);

	var downloadLink = document.createElement("a");
	downloadLink.download = title;

	canvas.toBlob(function (blob) {
		downloadLink.href = URL.createObjectURL(blob);
		downloadLink.click();
	}, 'image/png');
}

var screenshotButton = document.createElement("button");
screenshotButton.className = "screenshotButton ytp-button";
screenshotButton.style.width = "auto";
screenshotButton.innerHTML = "Screenshot";
screenshotButton.style.cssFloat = "left";
screenshotButton.onclick = CaptureScreenshot;

var ytpRightControls = document.getElementsByClassName("ytp-right-controls")[0];
if (ytpRightControls) {
	ytpRightControls.prepend(screenshotButton);
}
