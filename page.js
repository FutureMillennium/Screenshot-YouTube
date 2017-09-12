// Copyright (c) 2013 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


function screenCapture(){
	//get the name of the video
	var videoTitle = document.getElementsByClassName("watch-title")[0].innerHTML.trim();

	var videoPlayer = document.getElementsByClassName("video-stream")[0];
	var canvas = document.createElement("canvas");
	canvas.width = videoPlayer.videoWidth;
	canvas.height = videoPlayer.videoHeight;
	canvas.getContext('2d').drawImage(videoPlayer, 0, 0, canvas.width, canvas.height);

	//var img = document.createElement("img");
	//img.src = canvas.toDataURL();
	//document.body.prepend(img);
	var imgdata = canvas.toDataURL('image/png');
	//var newdata = imgdata.replace(/^data:image\/png/,'data:application/octet-stream');
	//location.href = imgdata;

	var dummyAnchor = document.createElement("a");
	dummyAnchor.href = imgdata;
	dummyAnchor.download = videoTitle+"-screenshot.png";
	dummyAnchor.click();
}
/*
chrome.tabs.onUpdated.addListener.addListener(
  function(tabId, changeInfo, tab) {
    window.console.log('updated from contentscript');
  }
);*/

var button = document.createElement("button");
button.className = "screenshotButton ytp-button";
button.background = "none";
button.border = "0px";
button.style.width = "65px";
button.innerHTML = "Capture";
button.style.color = "white";
button.style.cssFloat = "left";
button.onclick=screenCapture;
/*
var img = document.createElement("img");
img.src="https://cdn3.iconfinder.com/data/icons/mnml/screenshot.png";
img.height="20px";
//button.innerHTML = "hello";
button.appendChild(img);
*/
//document.body.prepend(button);
var interval = window.setInterval(function(){
	var ytpControlsRight = document.getElementsByClassName("ytp-right-controls")[0];
	if(ytpControlsRight && ytpControlsRight.innerHTML!=="Capture"){
		ytpControlsRight.prepend(button);
		clearInterval(interval);
	}
},2000);
	


