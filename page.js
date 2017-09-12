
function CaptureScreenshot() {
	var title = document.querySelectorAll("h1.title")[0].innerHTML.trim();

	var player = document.getElementsByClassName("video-stream")[0];
	var canvas = document.createElement("canvas");
	canvas.width = player.videoWidth;
	canvas.height = player.videoHeight;
	canvas.getContext('2d').drawImage(player, 0, 0, canvas.width, canvas.height);

	var dataImage = canvas.toDataURL('image/png');

	var downloadLink = document.createElement("a");
	downloadLink.href = dataImage;
	downloadLink.download = title + "-screenshot.png";
	downloadLink.click();
}

var screenshotButton = document.createElement("button");
screenshotButton.className = "screenshotButton ytp-button";
screenshotButton.background = "none";
screenshotButton.border = "0px";
screenshotButton.style.width = "65px";
screenshotButton.innerHTML = "Screenshot";
screenshotButton.style.color = "white";
screenshotButton.style.cssFloat = "left";
screenshotButton.onclick = CaptureScreenshot;

var ytpControlsRight = document.getElementsByClassName("ytp-right-controls")[0];
if (ytpControlsRight) {
	ytpControlsRight.prepend(screenshotButton);
}
