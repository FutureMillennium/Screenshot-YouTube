'use strict';

chrome.storage.sync.get('playbackSpeedButtons', function(result) {
	PlaybackSpeedButtonsCheck.checked = result.playbackSpeedButtons;
});

PlaybackSpeedButtonsCheck.oninput = function() {
	chrome.storage.sync.set({'playbackSpeedButtons': PlaybackSpeedButtonsCheck.checked});
};
