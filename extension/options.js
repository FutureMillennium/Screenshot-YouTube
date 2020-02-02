"use strict";

var ScreenshotFunctionalityCheck = [false, false, false];

chrome.storage.sync.get(
	["screenshotKey", "playbackSpeedButtons", "screenshotFunctionality"],
	function(result) {
		ScreenshotKeyCheck.checked = result.screenshotKey;
		PlaybackSpeedButtonsCheck.checked = result.playbackSpeedButtons;
		PlaybackSpeedButtonsChange();

		console.log(result.screenshotFunctionality);
		if (result.screenshotFunctionality == undefined) {
			chrome.storage.sync.set({ screenshotFunctionality: 0 });
			result.screenshotFunctionality = 0;
		}
		var radios = document.getElementsByName("ScreenshotFunctionalityCheck");
		for (var i = 0, length = radios.length; i < length; i++) {
			//radios[i].oninput = ScreenshotFunctionalityCheckFunc;
			// radios[i].oninput = function() {
			// 	alert("test");
			// };

			if (i == result.screenshotFunctionality) {
				radios[i].checked = true;

				break;
			}
		}
	}
);

ScreenshotKeyCheck.oninput = function() {
	chrome.storage.sync.set({ screenshotKey: this.checked });
};

var ScreenshotFunctionalityCheckFunc = function(value) {
	chrome.storage.sync.set({ screenshotFunctionality: value });
};

SFCSave.oninput = function() {
	ScreenshotFunctionalityCheckFunc(this.value);
};
SFCCopy.oninput = function() {
	ScreenshotFunctionalityCheckFunc(this.value);
};
SFCBoth.oninput = function() {
	ScreenshotFunctionalityCheckFunc(this.value);
};

PlaybackSpeedButtonsCheck.oninput = function() {
	chrome.storage.sync.set({ playbackSpeedButtons: this.checked });
	PlaybackSpeedButtonsChange();
};

function PlaybackSpeedButtonsChange() {
	PlaybackSpeedHelp.hidden = !PlaybackSpeedButtonsCheck.checked;
}
