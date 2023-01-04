/*
 * BSD 3-Clause License
 *
 * Copyright (c) 2023, pierrick
 * All rights reserved.
 */

var currentIndex = 0;
var nbImages = 0;
var toggleFullScreen = false;

$(document).ready(function(){

    /* Count number of images to display */
	nbImages = $('.images img').length;

    /*
    	Add thumbnails
    	This function have to be called at first !
    	It clones and setup all images in div '.imagess'
    */
    setupThumbnails();

	$('.images img').each(function() {
        /* Call fullScreen function on click to the main image */
        $(this).click(fullScreen);
    });

	/* Add classes fullScreenOff and shadow to all images */
	$('.images img').addClass('fullScreenOff')
		.addClass('shadow');

	/* Hide all images except the first */
    $('.images img:not(:first-child)').hide();

    /* Call leftArraow function on click to the left arrow */
	$('#left-arrow').click(leftArrow);

    /* Call rightArraow function on click to the right arrow */
    $('#right-arrow').click(rightArrow);

	/* Setup images id */
    addImageId();
});

/*
	Setup thumbnails of images
	It clones all images in '.thumbnails' class.
	Then it adds an id like #thumbnail-{number}
		where {number} starts from 0 to the number of images
	Finally it adds '.cursorPointer' class to all images except the first
*/
function setupThumbnails() {

	var id = 'thumbnail-';
   	var index = 0;

	$('.images img').each(function() {
		$('.thumbnails').append(
			$(this).clone()
				.attr('id', id.concat(index))
				.click({id: index}, callChangeMainImage)
		);
		index++;
	});

	/* Adds '.cursorPointer' class to all images except the first */
	$('.thumbnails img:not(:first-child)').addClass('cursorPointer');
}

/*
	Setup id for each images
	ids are: #images-{number}
	{number} starts at 0 and increase to the number of images
*/
function addImageId() {

	var id = 'image-';
	var index = 0;

	$('.images img').each(function() {
		$(this).attr('id', id.concat(index));
		index++;
	});
}

/*
	Get index number from event parameter and call changeMainImage.
	This function have to be called from click on thumbnails
*/
function callChangeMainImage(event) {
	changeMainImage(event.data.id);
}

/*
	Display next image
*/
function changeMainImage(newIndex) {

	if( currentIndex != newIndex ) {

		var newImage = '#image-'.concat(newIndex);
		var newButton = '#thumbnail-'.concat(newIndex);
		var currentImage = '#image-'.concat(currentIndex);
		var currentButton = '#thumbnail-'.concat(currentIndex);
		var newTitle = '.title-'.concat(newIndex);
		var currentTitle = '.title-'.concat(currentIndex);

		$(newImage).show();
		$(currentImage).hide();

		$(currentButton).removeClass('shadow').removeClass('cursorDefault').addClass('cursorPointer');
		$(newButton).addClass('shadow').addClass('cursorDefault').removeClass('cursorPointer');

		$(currentTitle).hide();
		$(newTitle).show();

		currentIndex = newIndex;
	}
}

/*
	Get previous image
*/
function leftArrow() {
	var index = currentIndex - 1;

	if( index < 0 ) {
		index = nbImages - 1;
	}

	changeMainImage(index);
}

/*
	Get next image
*/
function rightArrow() {
	var index = currentIndex + 1;

	if( index >= nbImages ) {
		index = 0;
	}

	changeMainImage(index);
}

/*
	Toggle image in full screen or back in default view
*/
function fullScreen() {

	var image = '#image-'.concat(currentIndex);

	// display image in full screen mode
	if( toggleFullScreen == false ) {
		$(image).removeClass('fullScreenOff');
		$(image).addClass('fullScreenOn');

		$('body').removeClass('backgroundImage');
		$('body').addClass('backgroundBlack');

		$('.thumbnails').hide();
		$('.arrow').hide();
		toggleFullScreen = true;

	} else {
		// display image in default mode
		$(image).removeClass('fullScreenOn');
		$(image).addClass('fullScreenOff');

		$('body').removeClass('backgroundBlack');
		$('body').addClass('backgroundImage');

		$('.thumbnails').css('display', 'flex');
		$('.arrow').show();
		toggleFullScreen = false;
	}
}
