# Simple JavaScript Image Gallery

This is a very simple, lightweight and standalone image gallery developed in JavaScript with JQuery.

# Demonstration

The online demonstration is available here: https://pierrick.frama.io/very-simple-javascript-image-gallery/

# Why another image gallery in JavaScript ?

I had to install a lightweight image gallery on a USB key. The gallery had to run without any internet connection. Moreover I wanted to be absolutely sure of the behavior of the programme: displaying images whatever their size and no more!

I concluded I will spend less time in developing my own image gallery instead of reviewing existing ones.

The gallery is programmed to run in "full screen" mode. To reduce the size of the gallery, you have to modify the CSS.

# Features

* Display images whatever their size
* Possible to display images in full screen mode
* Support image's title
* Very simple and lightweight HTML and CSS code
* Thumbnails are generated automatically
* Run without internet connection and with few dependencies
* Support keyboard interactions

# Clone the repository

Get the source code with the following command

```
git clone https://framagit.org/pierrick/very-simple-javascript-image-gallery.git
```

# Architecture of the project

```
 -src/
     |__-css/
     |     |__ simple-gallery.css   (CSS code of the gallery - copy from public by CI)
     |__-js/
     |     |__ simple-gallery.js    (JS code of the gallery  - copy from public by CI)
     |__-img/
           |__ -utils/
	           |__-left-arrow.png	      (Left arrow of gallery)
	           |__-right-arrow.png      (Right arrow of gallery)

 -public/
     |__-css/
     |     |__ simple-gallery.css   (CSS code of the gallery)
     |__-js/
     |     |__ simple-gallery.js    (JS code of the gallery)
     |     |__ jquery-3.6.3.min.js  (the dependency)
     |__-img/
     |     |__ gallery/ (all images for the gallery demonstration)
     |     |__ utils/   (all side images for the demonstration)
     |__-index.html     (example page of the gallery)
```

# Dependencies

The gallery requires JQuery in version 3.6.3: https://code.jquery.com/jquery-3.6.3.min.js

### Screenshot

[![Screenshot](https://framagit.org/pierrick/very-simple-javascript-image-gallery/-/raw/main/public/screenshot.jpg)](https://framagit.org/pierrick/very-simple-javascript-image-gallery/-/raw/main/public/screenshot.jpg)

# Installation

### 1. Setup CSS

Copy **simple-gallery.css** from **src/css/** to your CSS folder

Import **simple-gallery.css** in your *head* section

```html
<link rel="stylesheet" href="./css/simple-gallery.css" />
```

### 2. Setup JavaScript

Copy **\*.js** from **src/js/** to your JavaScrip folder

Import both **JavaScript files** at the end of your html file

```html
<script type="text/javascript" src="./js/jquery-3.6.3.min.js"></script>
<script type="text/javascript" src="./js/simple-gallery.js"></script>
```

### 3. Copy images of left and right arrow

Copy **utils/** folder from **src/img/** to your images folder

### 4. Setup the images of the gallery

Copy the following code where you want to place the gallery

```html
<!-- Main place for the gallery: titles, images and thumbnails -->
<section class="simple-js-gallery"> <!-- === USE THAT ID TO SETUP THE GALLERY === -->

    <!-- Titles and are generated from title attribute -->
	<!-- Thumbnails are generated automatically from images -->
	<!-- === PUT ALL YOUR IMAGES HERE ACCORDING TO THE FOLLOWING EXAMPLES === -->
	<img src="./img/gallery/0.jpg" title="Lights in a circle"/>
	<img src="./img/gallery/1.jpg" title="A city by night"/>
	<!-- ETC. -->

</section>
```

Add your images in section *#simple-js-gallery* according to the examples

### 5. Optional: Customize the gallery

To change position and size of your gallery with CSS open **simple-gallery.css** and modify the following properties

```css
/**
 * === POSITION OF THE GALLERY ===
 */
 .positionOfGallery {
	position: absolute;
	top: 20%;
	left: 20%;
}

/**
 * === SIZE OF THE GALLERY ===
 * 
 * For full screen mode ==> width: 98%; height: 95%;
 * Sub elements of the gallery resize automatically.
 */
.sizeOfGallery {
	width: 58%;
	height: 55%;
}
```

You can change the design of the gallery with the following CSS class

```css
 /**
  * === Decorations of the gallery ===
  * 
  * Change them according to the design of your web site
  */
.decorationGallery {
	background-color: #0000001f;
	border-radius: 20px;
}
```

To change the other elements, use the following classes

* main image in default view -> *.defaultView*
* main image in full screen view -> *.fullScreenView*
* thumbnails area -> *.simple-js-gallery-thumbnails*
* thumbnails images -> *.simple-js-gallery-thumbnails img*
* arrows -> *.simple-js-gallery-arrows*
* left arrow -> *.simple-js-gallery-left-arrow*
* right arrow -> *.simple-js-gallery-right-arrow*

### 6. Enjoy your gallery!

# Usage

### Navigate through the images

There are three options to navigate through images:

* click on the left ou right arrow
* click on the thumbnails
* press key left or right key

### Display image in full screen mode

There are two options to display image in full screen mode:

* click on the image
* press key f

### Display image in default view mode

There are three options to display image in default view mode:

* click on the image
* press key f
* press key escape

# Authors and acknowledgment

Developer: Pierrick MARIE contact at pierrickmarie.info

# License

This project is under *3-Clause BSD License*.

# Project status

The project is still under development.

# Contributing

Do not hesitate to improve to this program. Feel free to send PR or contact me to send comments. You are welcome to fork this project also ;)

# Badges

[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause) [![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com) [![made-with-html5](https://img.shields.io/badge/Made%20with-html5-%23E34F26.svg)](https://html.spec.whatwg.org/multipage/) [![made-with-CSS3](https://img.shields.io/badge/Made%20with-css3-%231572B6.svg)](https://www.w3.org/TR/css-2022/)
