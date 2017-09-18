
function CaptureScreenshot() {
	var title = document.querySelectorAll("h1.title")[0].innerHTML.trim();

	var player = document.getElementsByClassName("video-stream")[0];
	var canvas = document.createElement("canvas");
	canvas.width = player.videoWidth;
	canvas.height = player.videoHeight;
	canvas.getContext('2d').drawImage(player, 0, 0, canvas.width, canvas.height);

	var downloadLink = document.createElement("a");
	downloadLink.download = title + " screenshot.png";

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
