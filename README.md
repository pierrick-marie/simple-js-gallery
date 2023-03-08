Simple JavaScript Image Gallery 
==================================

This is a very simple, lightweight and standalone image gallery developed in JavaScript with JQuery and Scss.

# Demonstration

The online demonstration is available here: https://pierrick-marie.github.io/simple-js-gallery

# Why another image gallery in JavaScript ?

I had to install a lightweight image gallery on a USB key. The gallery had to run without any internet connection. Moreover I wanted to be absolutely sure of the behavior of the programme: displaying images whatever their size and no more!

I concluded I will spend less time in developing my own image gallery instead of reviewing existing ones.

The gallery is programmed to run in "full screen" mode. To reduce the size of the gallery, you have to modify the CSS.

# Features

* Display images whatever their size
* Possible to display images in full screen mode
* Support image's title
* Very simple and lightweight HTML5 and Scss code
* Thumbnails are generated automatically
* Run with few dependencies and without internet connection
* Support keyboard interactions

# Clone the repository

Get the source code with the following command

```
git clone https://github.com/pierrick-marie/simple-js-gallery.git
```

# Architecture of the project

```
 -src/
     |__ sass/
     |     |__ body.scss            (Scss code of gallery)
     |     |__ custom.scss   	      (Scss code of gallery)
     |     |__ gallery.scss         (Scss code of gallery)
     |     |__ simple-gallery.scss  (Scss code of gallery)
     |__ js/
     |     |__ simple-gallery.js    (JS code of the gallery  - copy from public by CI)
     |__ img/
           |__ utils/
                 |__ left-arrow.png	      (Left arrow of gallery)
                 |__ right-arrow.png      (Right arrow of gallery)
                 |__ background.jpg       (Background for the demonstration) 
                 |__ logo.png             (The favicon for the example)
           |__ gallery/
                 |__ ... (Images to test the gallery)

 -example/
     |__ sass/
     |     |__ simple-gallery.css   (CSS code of the gallery - transpile from *.scss files)
     |__ js/
     |     |__ simple-gallery.js    (JS code of the gallery)
     |     |__ jquery-3.6.3.min.js  (the dependency)
     |__ img/
           |__ utils/
                 |__ left-arrow.png	      (Left arrow of gallery)
                 |__ right-arrow.png      (Right arrow of gallery)
                 |__ background.jpg       (Background for the demonstration) 
                 |__ logo.png             (The favicon for the example)
           |__ gallery/
                 |__ ... (Images to test the gallery)
     |__ index.html      (example page of the gallery)
```

# Dependencies

The gallery requires JQuery in version 3.6.3: https://code.jquery.com/jquery-3.6.3.min.js
The dependency is included in source code.

# Installation

### 1. Setup Scss / CSS

You can directly use css file transpiled from the Scss source files.

The CSS file is in folder **example/css/**. 
Copy **simple-gallery.css** in your CSS folder.
Import **simple-gallery.css** in your *head* section:

```html
<link rel="stylesheet" href="./css/simple-gallery.css" />
```

You can use Scss source files from **src/sass** folder.
In that case you have to transpile Scss files into CSS.

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
<section class="simple-gallery"> <!-- === USE THAT CLASS TO SETUP THE GALLERY === -->

	<!-- Titles and are generated from title attribute -->
	<!-- Thumbnails are generated automatically from images -->
	<!-- === PUT ALL YOUR IMAGES HERE ACCORDING TO THE FOLLOWING EXAMPLES === -->
	<img src="./img/gallery/0.jpg" title="Lights in a circle"/>
	<img src="./img/gallery/1.jpg" title="A city by night"/>
	<!-- ETC. -->

</section>
```

Add your images in section *.simple-js-gallery* according to the examples

### 5. Optional: Customize the gallery

To change position, size or decoration of your gallery, modify the following classes. Those classes are in **src/sass/custom.scss**.

```css
/**
 * === POSITION OF THE GALLERY ===
 */
 .positionOfGallery {
	...
}

/**
 * === SIZE OF THE GALLERY ===
 * 
 * For full screen mode ==> width: 98%; height: 95%;
 * Sub elements of the gallery resize automatically.
 */
.sizeOfGallery {
	...
}

 /**
  * === Decorations of the gallery ===
  * 
  * Change them according to the design of your web site
  */
.decorationOfGallery {
	...
}
```

To change the other elements, use the following classes in **src/sass/gallery.scss**

* main image in default view -> *.defaultView*
* main image in full screen view -> *.fullScreenView*
* thumbnails area -> *.nav .thumbnails*
* arrows -> *.arrows*

### 6. Enjoy your gallery!

#### Navigate through the images

There are three options to navigate through images:

* click on "left" or "right" arrow
* click on the thumbnails
* press "left" or "right" key

#### Display image in default view mode

There are three options to display image in default view mode:

* click on the image or press "f" key to toggle in full screen view
* press "escape" key to exit full screen view and go back in default view

# Authors and acknowledgment

Developer: Pierrick MARIE contact at pierrickmarie.info

# License

This project is under *3-Clause BSD License*.

# Contributing

Do not hesitate to improve to this program. Feel free to send PR or contact me to send comments. You are welcome to fork this project also ;)

# Badges

[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause) [![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com) [![made-with-html5](https://img.shields.io/badge/Made%20with-html5-%23E34F26.svg)](https://html.spec.whatwg.org/multipage/) [![made-with-CSS3](https://img.shields.io/badge/Made%20with-css3-%231572B6.svg)](https://www.w3.org/TR/css-2022/)
