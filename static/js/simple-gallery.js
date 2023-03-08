/**
 * BSD 3-Clause License
 *
 * Copyright (c) 2023, Pierrick MARIE contact at pierrickmarie.info
 * All rights reserved.
 **/

const GALLERY = '.simple-gallery';		// the class of the main section of the gallery
const IMAGES = `${GALLERY} > img`;		// all the images of the gallery
const TITLE = `${GALLERY} .title`;		// the class of title section
const BOARD = `${GALLERY} .board`;
const IMAGE = `${BOARD} .image`;
const NAV = `${GALLERY} .nav`;
const THUMBNAIL_SECTION = `${NAV} .thumbnails`;	// the class of thumbnails section
const THUMBNAIL_IMAGES = `${THUMBNAIL_SECTION} .thumbnail`;
const ARROWS = `${NAV} .arrows`;		// the class of arrows section

var CURRENT_IMAGE_NUMBER = -1;		// the number of the current image displayed on the screen
var NB_IMAGES = 0;		// the total number of images
var SIZE_OF_THUMBNAIL = 0;
var IS_FULL_SCREEN_MODE = false;	// save whether the image is displayed in full screen or not

$(document).ready(function () {

	setupGallerySections();

	setupKeyboardBinding();

	// Setup display arrows following mouse moves during fullscreen view
	let timer;	// The id of the timer
	$(document).mousemove(function (event) {
		fadeInArrows(event);
		clearTimeout(timer); // reset timer
		timer = setTimeout(fadeOutArrows, 2 * 1000) // fade out arrows after 2 seconds
	});
});

/**
 * Init the sections: title, arrows and thumbnails
 */
function setupGallerySections() {

	setupTitlesSection();

	setupImageSection();

	setupNavSection();

	loadImage(0);
}

/**
 * Add a section that will contain the title of the current image
 */
function setupTitlesSection() {

	$(GALLERY).prepend('<h1 class="title"></h1>');	// Insert h1 section
}

/**
 * Setup all images in the gallery:
 * 	- init global var NB_IMAGES
 */
function setupImageSection() {

	NB_IMAGES = $(IMAGES).length;	// Count number of images to display
	
	$(TITLE).after('<div class="board"></div>');
}

/**
 * Configure the section for thumbnails
 */
function setupNavSection() {

	$(GALLERY).append('<nav class="nav"></nav>');
	$(NAV).append("<div class='arrows'></div>");
	$(ARROWS).html(`<img class="left arrow" src="./img/utils/left-arrow.png" onclick="leftArrowClicked()">
	<img class="right arrow" src="./img/utils/right-arrow.png" onclick="rightArrowClicked()">`);

	$(NAV).append('<div class="thumbnails"></div>');	// Add a section for thumbnails after the images

	setupThumbnailSection();

	// Compute the mean size of a thumbnail
	var sizeOfThumbnails = 0;
	$(THUMBNAIL_IMAGES).each(function() {
		sizeOfThumbnails += $(this).width();
	});
	SIZE_OF_THUMBNAIL = sizeOfThumbnails / NB_IMAGES;
}

/**
 * Setup thumbnails of images
 * It clones all images in '.thumbnails' class.
 * Then it adds an class like .thumbnail-{number}
 *  where {number} starts from 0 to the number of images
 * Finally it adds '.cursorPointer' class to all images except the first
 */
function setupThumbnailSection() {

	var index = 0;

	$(IMAGES).each(function () {
		$(this)
			.addClass('thumbnail')
			.addClass(`thumbnail-${index}`)	// Add class .thumbnails-{index}
			.click({ classIndex: index }, callChangeCurrentImage) 	// on click to a thumbnails, call function to display the new image
			.appendTo($(THUMBNAIL_SECTION))
		index++;
	});

	$(THUMBNAIL_IMAGES).slice(1).addClass('cursor-pointer'); // Add cursor clickable to all thumbnails except first
	$(THUMBNAIL_IMAGES).first().addClass('shadow'); // Add shadow on first thumbnail
}

/**
 * Add event handler on left, right and escape key to change current image
 */
function setupKeyboardBinding() {

	$(document).keydown(function (event) {
		if (event.which == 37) { 	// left key pressed
			leftArrowClicked();
		} else {
			if (event.which == 39) { 	// right key pressed
				rightArrowClicked();
			} else {
				if (event.which == 27 && IS_FULL_SCREEN_MODE == true) { // escape key pressed && in full screen view
					toggleFullScreenView();
				} else {
					if (event.which == 70) { 	// f key pressed
						toggleFullScreenView();
					}
				}
			}
		}
	});
}

/**
 * Get index of previous image
 */
function leftArrowClicked() {

	var index = CURRENT_IMAGE_NUMBER - 1;

	if (index < 0) {
		index = NB_IMAGES - 1;
	}

	loadImage(index);
}

/**
 * Get index of next image
 */
function rightArrowClicked() {

	var index = CURRENT_IMAGE_NUMBER + 1;

	if (index >= NB_IMAGES) {
		index = 0;
	}

	loadImage(index);
}

/**
 * Get index number from event parameter and call changeMainImage.
 * This function have to be called from click on thumbnails
 */
function callChangeCurrentImage(event) {
	loadImage(event.data.classIndex);
}

/**
 * Display next image
 */
function loadImage(newIndex) {

	if (CURRENT_IMAGE_NUMBER != newIndex) {


		const _newThumbnail = `${THUMBNAIL_IMAGES}-${newIndex}`;	// Compute new index of .thumbnail-
		const _currentThumbnail = `${THUMBNAIL_IMAGES}-${CURRENT_IMAGE_NUMBER}`;	// Compute current index of is .thumbnail-

		CURRENT_IMAGE_NUMBER = newIndex;	// update currentIndex with new value

		$(BOARD).html(
			$(_newThumbnail).clone()
				.removeClass('thumbnail')
				.removeClass('shadow')
				.addClass('cursor-pointer')
				.addClass('image')
		);

		if (IS_FULL_SCREEN_MODE == true) {
			displayFullScreenView();
		} else {
			displayDefaultView();
		}

		$(THUMBNAIL_SECTION).scrollLeft(SIZE_OF_THUMBNAIL * CURRENT_IMAGE_NUMBER);	// Update horizontal scroll position of thumbnails 

		$(_currentThumbnail).removeClass('shadow').removeClass('cursor-default').addClass('cursor-pointer');	// change skin of current thumbnail
		$(_newThumbnail).addClass('shadow').addClass('cursor-default').removeClass('cursor-pointer'); 		// change skin of new selected thumbnail

		$(TITLE).html($(_newThumbnail).attr('title')); // Update title
	}
}

/**
 *  Toggle image in full screen or back in default view
 */
function toggleFullScreenView() {

	if (IS_FULL_SCREEN_MODE == false) { // display image in full screen mode
		displayFullScreenView();

		$('body').addClass('backgroundBlack'); // change background to black
		$(`${GALLERY}-left-arrow`).addClass('simple-gallery-left-arrow-full-screen');
		$(`${GALLERY}-right-arrow`).addClass('simple-gallery-right-arrow-full-screen');
		$(`${ARROWS}`).fadeOut(1000);

		IS_FULL_SCREEN_MODE = true;

	} else { // display image in default mode
		displayDefaultView();

		$('body').removeClass('backgroundBlack'); // remove black background
		$(`${GALLERY}-left-arrow`).removeClass('simple-gallery-left-arrow-full-screen');
		$(`${GALLERY}-right-arrow`).removeClass('simple-gallery-right-arrow-full-screen');
		$(`${ARROWS}`).fadeIn();

		IS_FULL_SCREEN_MODE = false;
	}

	$(`.${THUMBNAIL_SECTION}`).toggle();	// hide thumbnails
	$(TITLE).toggle(); 	// hide titles
}


/**
 * Display image in full screen mode
 */
function displayFullScreenView() {

	$(IMAGE).removeClass('defaultView'); // switch CSS of current image from default view to full screen view
	$(IMAGE).addClass('fullScreenView');
}

/**
 * Display image in default view
 */
function displayDefaultView() {

	$(IMAGE).removeClass('fullScreenView'); // switch CSS of current image from full screen view to full default view
	$(IMAGE).addClass('defaultView');
}

/**
 * Fade in arrows in full screen view 
*/
function fadeInArrows(event) {

	if (IS_FULL_SCREEN_MODE) {
		$(`.${ARROWS}`).fadeIn();
	}
}

/**
 * Fade out arrows in full screen view 
*/
function fadeOutArrows() {
	if (IS_FULL_SCREEN_MODE) {
		$(`.${ARROWS}`).fadeOut();
	}
}