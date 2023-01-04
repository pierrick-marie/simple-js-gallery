// DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
// 		Version 2, December 2004
//
// Copyright (C) 2004 Sam Hocevar <sam@hocevar.net>
//
// Everyone is permitted to copy and distribute verbatim or modified
// copies of this license document, and changing it is allowed as long
// as the name is changed.
//
// DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
// TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION
//
// 0. You just DO WHAT THE FUCK YOU WANT TO.

var currentIndex = 1;
var nbImages = 0;
var toggleFullScreen = false;

$(document).ready(function(){
	nbImages = $(".full-image").children("img").length + 1;
});

function changeMainImage(newIndex) {

	if( currentIndex != newIndex ) {

		var newImage = "#image-".concat(newIndex);
		var newButton = "#button-".concat(newIndex);
		var currentImage = "#image-".concat(currentIndex);
		var currentButton = "#button-".concat(currentIndex);
		var newTitle = ".title-".concat(newIndex);
		var currentTitle = ".title-".concat(currentIndex);

		$(newImage).show();
		$(currentImage).hide();

		$(currentButton).removeClass("shadow").removeClass("cursorDefault").addClass("cursorPointer");
		$(newButton).addClass("shadow").addClass("cursorDefault").removeClass("cursorPointer");

		$(currentTitle).hide();
		$(newTitle).show();

		currentIndex = newIndex;
	}
}

function leftArrow() {
	var index = currentIndex - 1;

	if( index <= 0 ) {
		index = nbImages - 1;
	}

	changeMainImage(index);
}

function rightArrow() {
	var index = currentIndex + 1;

	if( index >= nbImages ) {
		index = 1;
	}

	changeMainImage(index);
}

function fullScreen() {

	var image = "#image-".concat(currentIndex);

	if( toggleFullScreen == false ) {
		$(image).removeClass("fullScreenOff");
		$(image).addClass("fullScreenOn");

		$("body").removeClass("backgroundImage");
		$("body").addClass("backgroundBlack");

		$(".thumbnails").hide();
		$(".arrow").hide();
		toggleFullScreen = true;

	} else {
		$(image).removeClass("fullScreenOn");
		$(image).addClass("fullScreenOff");

		$("body").removeClass("backgroundBlack");
		$("body").addClass("backgroundImage");

		$(".thumbnails").css("display", "flex");
		$(".arrow").show();
		toggleFullScreen = false;
	}
}
