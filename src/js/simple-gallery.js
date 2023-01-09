/**
 * BSD 3-Clause License
 *
 * Copyright (c) 2023, pierrick
 * All rights reserved.
 **/

const GALLERY = 'simple-gallery';		// the class of the main section of the gallery
const IMAGES = `.${GALLERY} > img`;		// all the images of the gallery
const THUMBNAILS = `${GALLERY}-thumbnails`;	// the class of thumbnails section
const TITLE = `${GALLERY}-title`;		// the class of title section
const ARROWS = `${GALLERY}-arrows`;		// the class of arrows section

var CURRENT_IMAGE_NUMBER = 0;		// the number of the current image displayed on the screen
var NB_IMAGES = 0;		// the total number of images
var IS_FULL_SCREEN_MODE = false;	// save whether the image is displayed in full screen or not

$(document).ready(function () {

	setupGallerySections(); 

	setupImages(); 	

	setupKeyboardBinding();
});

/**
 * Init the sections: title, arrows and thumbnails
 */
function setupGallerySections() {

	$(`.${GALLERY}`).addClass('sizeOfGallery')	// Defines the size of the gallery
		.addClass('positionOfGallery')	// Defines the position of the gallery
		.addClass('decorationGallery');	// Decorates the gallery

	setupTitlesSection(); 

	setupThumbnailsSection();

	setupArrows(); 
}

/**
 * Setup all images in the gallery:
 * 	- init global var NB_IMAGES
 * 	- add class defaultView
 * 	- hide all images except the first
 * 	- add class to all images
 */
function setupImages() {

	NB_IMAGES = $(IMAGES).length;	// Count number of images to display

	$(IMAGES).first().addClass('defaultView');	// Add classes defaultView to the first image
	$(IMAGES).first().show();	// Show first image

	$(IMAGES).each(function () {	// For each images
		$(this).click(toggleFullScreenView);	// Call toggleFullScreenView function on click to the main image
	});

	setupImagesClass(); 
}

/**
 * Configure the section for thumbnails
 */
function setupThumbnailsSection() {

	$(`.${GALLERY}`).append(`<section class="${THUMBNAILS}"></section>`);	// Add a section for thumbnails after the images

	setupThumbnailImages();
}

/**
 * Setup thumbnails of images
 * It clones all images in '.thumbnails' class.
 * Then it adds an class like .thumbnail-{number}
 *  where {number} starts from 0 to the number of images
 * Finally it adds '.cursorPointer' class to all images except the first
 */
function setupThumbnailImages() {

	const _thumbnailClass = `${GALLERY}-thumbnail-`;	// Class of thumbnail
	var index = 0;

	$(IMAGES).each(function () {
		$(`.${THUMBNAILS}`).append(
			$(this).clone()
				.attr('class', _thumbnailClass.concat(index))	// Add class .thumbnails-{index}
				.click({ class: index }, callChangeCurrentImage) 	// on click to a thumbnails, call function to display the new image
		);
		index++;
	});

	$(`.${THUMBNAILS} img`).slice(1).addClass('cursorPointer'); // Add cursor clickable to all thumbnails except first
	$(`.${THUMBNAILS} img`).first().addClass('shadow'); // Add shadow on first thumbnail
}

/**
 * Add a section that will contain the title of the current image
 * Setup the title with attribut from the first image
 */
function setupTitlesSection() {

	const _titleValue = $(IMAGES).first().attr('title');	// Get title of the first image

	$(`.${GALLERY}`).prepend(`<h1 class="${TITLE}">${_titleValue}</h1>`);	// Insert h1 section
}

/**
 * Add left and right arrows to navigate between the images
 * ! Be sure the section for titles is correctly enabled before !
 */
function setupArrows() {

	$(`.${TITLE}`).after(`
		<nav>
			<img class="${GALLERY}-left-arrow ${ARROWS}" src="./img/utils/left.png" onclick="leftArrowClicked()"/>
			<img class="${GALLERY}-right-arrow ${ARROWS}" src="./img/utils/right.png" onclick="rightArrowClicked()"/>
		</nav>
	`);	// Insert the arrows
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
 * Setup class for each images
 * classes are: .images-{number}
 * {number} starts at 0 and increase to the number of images
 */
function setupImagesClass() {

	const _imageClass = `${GALLERY}-image`; // Class of images

	var index = 0;

	$(IMAGES).each(function () {
		$(this).addClass(`${_imageClass}-${index}`); // Add class .image-{index}
		index++;
	});
}

/**
 * Get index number from event parameter and call changeMainImage.
 * This function have to be called from click on thumbnails
 */
function callChangeCurrentImage(event) {
	changeCurrentImage(event.data.class);
}

/**
 * Display next image
 */
function changeCurrentImage(newIndex) {

	if (CURRENT_IMAGE_NUMBER != newIndex) {

		const _image = `.${GALLERY}-image`;			// class of images
		const _thumbnail = `.${GALLERY}-thumbnail`;	// class of thumbnails

		const _newImageClass = `${_image}-${newIndex}`; 		// Compute new index of .image-
		const _newThumbnailClass = `${_thumbnail}-${newIndex}`;	// Compute new index of .thumbnail-

		const _currentImageClass = `${_image}-${CURRENT_IMAGE_NUMBER}`;		// Compute current index of is .image-
		const _currentThumbnailClass = `${_thumbnail}-${CURRENT_IMAGE_NUMBER}`;	// Compute current index of is .thumbnail-

		CURRENT_IMAGE_NUMBER = newIndex;	// update currentIndex with new value

		$(_currentImageClass).hide();	// hide previous image
		$(_newImageClass).show(); 		// display new image


		if (IS_FULL_SCREEN_MODE == true) {
			displayFullScreenView();
		} else {
			displayDefaultView();
		}

		$(_currentThumbnailClass).removeClass('shadow').removeClass('cursorDefault').addClass('cursorPointer');	// change skin of current thumbnail
		$(_newThumbnailClass).addClass('shadow').addClass('cursorDefault').removeClass('cursorPointer'); 		// change skin of new selected thumbnail

		$(`.${TITLE}`).html($(_newImageClass).attr('title')); // Update title
	}
}

/**
 * Get index of previous image
 */
function leftArrowClicked() {

	var index = CURRENT_IMAGE_NUMBER - 1;

	if (index < 0) {
		index = NB_IMAGES - 1;
	}

	changeCurrentImage(index);
}

/**
 * Get index of next image
 */
function rightArrowClicked() {

	var index = CURRENT_IMAGE_NUMBER + 1;

	if (index >= NB_IMAGES) {
		index = 0;
	}

	changeCurrentImage(index);
}

/**
 *  Toggle image in full screen or back in default view
 */
function toggleFullScreenView() {

	if (IS_FULL_SCREEN_MODE == false) { // display image in full screen mode
		displayFullScreenView();

		$('body').addClass('backgroundBlack'); // change background to black

		IS_FULL_SCREEN_MODE = true;

	} else { // display image in default mode
		displayDefaultView();

		$('body').removeClass('backgroundBlack'); // remove black background

		IS_FULL_SCREEN_MODE = false;
	}

	$(`.${THUMBNAILS}`).toggle();	// hide thumbnails
	// $(`.${ARROWS}`).toggle(); 	// hide arrows
	$(`.${TITLE}`).toggle(); 	// hide titles
}


/**
 * Display image in full screen mode
 */
function displayFullScreenView() {

	const _currentImageClass = `.${GALLERY}-image-${CURRENT_IMAGE_NUMBER}`;

	$(_currentImageClass).removeClass('defaultView'); // switch CSS of current image from default view to full screen view
	$(_currentImageClass).addClass('fullScreenView');
}

/**
 * Display image in default view
 */
function displayDefaultView() {

	const _currentImageClass = `.${GALLERY}-image-${CURRENT_IMAGE_NUMBER}`;

	$(_currentImageClass).removeClass('fullScreenView'); // switch CSS of current image from full screen view to full default view
	$(_currentImageClass).addClass('defaultView');
}
