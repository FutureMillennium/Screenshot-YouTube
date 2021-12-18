'use strict';

chrome.storage.sync.get(['screenshotKey', 'playbackSpeedButtons', 'screenshotFunctionality', 'screenshotFileFormat'], function(result) {
	ScreenshotKeyCheck.checked = result.screenshotKey;
	PlaybackSpeedButtonsCheck.checked = result.playbackSpeedButtons;
	PlaybackSpeedButtonsChange();

	if (result.screenshotFunctionality === undefined) {
		chrome.storage.sync.set({ screenshotFunctionality: 2 });
		result.screenshotFunctionality = 2;
	}
	var radios = document.getElementsByName("ScreenshotFunctionalityCheck");
	radios[result.screenshotFunctionality].checked = true;

	ScreenshotFileFormat.value = result.screenshotFileFormat;
});

ScreenshotKeyCheck.oninput = function() {
	chrome.storage.sync.set({'screenshotKey': this.checked});
};

function ScreenshotFunctionalitySet(value) {
	chrome.storage.sync.set({ screenshotFunctionality: parseInt(value) });
};

SFCSave.oninput = function() {
	ScreenshotFunctionalitySet(this.value);
};
SFCCopy.oninput = function() {
	ScreenshotFunctionalitySet(this.value);
};
SFCBoth.oninput = function() {
	ScreenshotFunctionalitySet(this.value);
};

PlaybackSpeedButtonsCheck.oninput = function() {
	chrome.storage.sync.set({'playbackSpeedButtons': this.checked});
	PlaybackSpeedButtonsChange();
};

function PlaybackSpeedButtonsChange() {
	PlaybackSpeedHelp.hidden = !PlaybackSpeedButtonsCheck.checked;
}

ScreenshotFileFormat.onchange = function() {
	chrome.storage.sync.set({'screenshotFileFormat': this.value});
}