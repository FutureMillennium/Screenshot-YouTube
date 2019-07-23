'use strict';

chrome.storage.sync.get(['screenshotKey', 'playbackSpeedButtons'], function(result) {
	ScreenshotKeyCheck.checked = result.screenshotKey;
	PlaybackSpeedButtonsCheck.checked = result.playbackSpeedButtons;
	PlaybackSpeedButtonsChange();
});

ScreenshotKeyCheck.oninput = function() {
	chrome.storage.sync.set({'screenshotKey': this.checked});
};

PlaybackSpeedButtonsCheck.oninput = function() {
	chrome.storage.sync.set({'playbackSpeedButtons': this.checked});
	PlaybackSpeedButtonsChange();
};

function PlaybackSpeedButtonsChange() {
	PlaybackSpeedHelp.hidden = !PlaybackSpeedButtonsCheck.checked;
}