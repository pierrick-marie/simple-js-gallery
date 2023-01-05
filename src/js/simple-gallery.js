/**
 * BSD 3-Clause License
 *
 * Copyright (c) 2023, pierrick
 * All rights reserved.
 **/

var currentIndex = 0;
var nbImages = 0;
var isFullScreenMode = false;

$(document).ready(function(){

	nbImages = $('.images img').length; // Count number of images to display

	/**
	 * Add thumbnails
	 * This function have to be called at first !
	 * It clones and setup all images in div '.imagess'
	 */
	setupThumbnails();

	$('.images img').each(function() {
		/* Call fullScreen function on click to the main image */
		$(this).click(togglefullScreenMode);
	});

	$('.images img').addClass('fullScreenOff')
		.addClass('shadow'); // Add classes fullScreenOff and shadow to all images

	$('.images img:not(:first-child)').hide(); // Hide all images except the first

	$('#left-arrow').click(leftArrowClicked); // Call leftArraowClicked function on click to the left arrow

	$('#right-arrow').click(rightArrowClicked); // Call rightArraowClicked function on click to the right arrow

	setupImages(); // Setup images id

	setupTitles(); // Setup title id

	setupKeyboardBinding(); // Setup keyboard binding
});

/**
 * Add event handler on left, right and escape key to change current image
 */
function setupKeyboardBinding() {
	
	$(document).keydown(function( event ) {
		if( event.which == 37 ) { // left key
			leftArrowClicked(); // display left image
		} else {
			if( event.which == 39 ) { // right key
				rightArrowClicked(); // display right image
			} else {
				if( event.which == 27 && isFullScreenMode == true ) { // escape key && in full screen mode
					togglefullScreenMode(); // toggle to default view mode
				} else {
					if( event.which == 70 ) { // f key 
						togglefullScreenMode(); // switch full screen / default view mode
					}
				}
			}
		}
	});
}

/**
 * Add an id for each title in <header>
 * Then, hide all the title except first
 */
function setupTitles() {

	var id = 'title-';
	var index = 0;

	$('header div').each(function() {
		$(this).attr('id', id.concat(index)); // Add is #title-{index}
		index++;
	});

	$('header div:not(:first-child)').hide(); // hide all titles except the first
}

/**
 * Setup thumbnails of images
 * It clones all images in '.thumbnails' class.
 * Then it adds an id like #thumbnail-{number}
 *  where {number} starts from 0 to the number of images
 * Finally it adds '.cursorPointer' class to all images except the first
 */
function setupThumbnails() {

	var id = 'thumbnail-';
   	var index = 0;

	$('.images img').each(function() {
		$('.thumbnails').append(
			$(this).clone()
				.attr('id', id.concat(index)) // Add id #thumbnails-{index}
				.click({id: index}, callChangeMainImage) // on click to a thumbnails, call function to display the new image
		);
		index++;
	});

	$('.thumbnails img:not(:first-child)').addClass('cursorPointer'); // Add '.cursorPointer' class to all images except the first
}

/**
 * Setup id for each images
 * ids are: #images-{number}
 * {number} starts at 0 and increase to the number of images
 */
function setupImages() {

	var id = 'image-';
	var index = 0;

	$('.images img').each(function() {
		$(this).attr('id', id.concat(index)); // Add id #image-{index}
		index++;
	});
}

/**
 * Get index number from event parameter and call changeMainImage.
 * This function have to be called from click on thumbnails
 */
function callChangeMainImage(event) {
	changeMainImage(event.data.id);
}

/**
 * Display next image
 */
function changeMainImage(newIndex) {

	if( currentIndex != newIndex ) {

		var newImage = '#image-'.concat(newIndex); // Compute new index of #image-
		var newThumbnail = '#thumbnail-'.concat(newIndex); // Compute new index of #thumbnail-
		var currentImage = '#image-'.concat(currentIndex); // Compute current index of is #image-
		var currentThumbnail = '#thumbnail-'.concat(currentIndex); // Compute current index of is #thumbnail-
		var newTitle = '#title-'.concat(newIndex); // Compute new index of is #title-
		var currentTitle = '#title-'.concat(currentIndex); // // Compute current index of is #title-

		currentIndex = newIndex; // update currentIndex with new value

		$(currentImage).hide(); // hide previous image
		$(newImage).show(); // display new image

		if( isFullScreenMode == true ) {
			displayFullScreenMode();
		} else {
			displayDefaultView();
		}
		
		$(currentThumbnail).removeClass('shadow').removeClass('cursorDefault').addClass('cursorPointer'); // change skin of current thumbnail
		$(newThumbnail).addClass('shadow').addClass('cursorDefault').removeClass('cursorPointer'); // change skin of new selected thumbnail

		$(currentTitle).hide(); // hide previous title
		$(newTitle).show(); // display new title
	}
}

/**
 * Get index of previous image
 */
function leftArrowClicked() {
	var index = currentIndex - 1;

	if( index < 0 ) {
		index = nbImages - 1;
	}

	changeMainImage(index);
}

/**
 * Get index of next image
 */
function rightArrowClicked() {
	var index = currentIndex + 1;

	if( index >= nbImages ) {
		index = 0;
	}

	changeMainImage(index);
}

/**
 *  Toggle image in full screen or back in default view
 */
function togglefullScreenMode() {

	if( isFullScreenMode == false ) { // display image in full screen mode
		displayFullScreenMode();	
		isFullScreenMode = true;

	} else { // display image in default mode
		displayDefaultView();
		isFullScreenMode = false;
	}
}


/**
 * Display image in full screen mode
 */
function displayFullScreenMode() {

	var image = '#image-'.concat(currentIndex);

	$(image).removeClass('fullScreenOff'); // switch CSS of current image from default view mode to full screen mode
	$(image).addClass('fullScreenOn');

	$('body').addClass('backgroundBlack'); // change background to black

	$('.thumbnails').hide(); // hide thumbnails
	$('.arrow').hide(); // hide arrows
	$('header').hide(); // hide titles
}

/**
 * Display image in default view
 */
function displayDefaultView() {

	var image = '#image-'.concat(currentIndex);

	$(image).removeClass('fullScreenOn'); // switch CSS of current image from full screen view mode to full default mode
	$(image).addClass('fullScreenOff');

	$('body').removeClass('backgroundBlack'); // remove black background

	$('.thumbnails').css('display', 'flex'); // display thumbnails
	$('.arrow').show(); // display arrows
	$('header').show(); // display titles
}