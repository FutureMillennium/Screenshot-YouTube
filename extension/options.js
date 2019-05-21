'use strict';

chrome.storage.sync.get(['screenshotKey', 'playbackSpeedButtons'], function(result) {
	ScreenshotKeyCheck.checked = result.screenshotKey;
	PlaybackSpeedButtonsCheck.checked = result.playbackSpeedButtons;
});

ScreenshotKeyCheck.oninput = function() {
	chrome.storage.sync.set({'screenshotKey': this.checked});
};

PlaybackSpeedButtonsCheck.oninput = function() {
	chrome.storage.sync.set({'playbackSpeedButtons': this.checked});
};
