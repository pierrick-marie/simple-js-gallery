# Very Simple JavaScript Image Gallery

This is a very simple, lightweith and standalone image gallery developped in JavaScript with JQuery.

# Why another image gallery in JavaScript ?

I had to install a lightweight image gallery on a USB key. The gallery had to run without any internet connection. Moreover I wanted to be absolutly sure of the behaviour of the programme: displaying images whatever their size and no more!

I conclued I will spend less time in developing my own image gallery instead of reviewing existing ones.

The gallery is programmed to run in "full screen" mode. To reduce the size of the gallery, you have to modify the CSS.

## Features

* Display images whatever their size
* Spread the gallery in all screen
* Display images in full screen mode
* Support title of images
* Very simple and lighweight HTML code
* Thumbnails generated automatically
* Standalone application
* Support keyboard interactions

## Clone the repository

Get the source code with the following command

```
git clone https://framagit.org/pierrick/very-simple-javascript-image-gallery.git
```

## Demonstration

After downloading the project you can find a standalone demonstration in folder **demo**.
You just have to open **index.html** file.

## Installation

1. copy **main.css** from **src/css/** to your CSS folder

2. copy **\*.js** from **src/js/** to your JavaScrip folder

3. read the instruction from the demonstration in **demo/index.hml**

### The instructions

**1. import main.css**

```html
<link rel="stylesheet" href="./css/main.css" />
```

**2. import both JavaScript files**

```html
<script type="text/javascript" src="./js/jquery-3.6.3.min.js"></script>
<script type="text/javascript" src="./js/simple-gallery.js"></script>
```

**3. copy the following code where you want to place the gallery**

```html
<!-- Main place for the gallery: titles, images and thumbnails -->
<section id="simple-js-gallery"> <!-- === USE THAT ID TO SETUP THE GALLERY === -->

	<!-- The area of the images -->
	<!-- Titles and are generated from title attribute -->
	<!-- Thumbnails are generated automatically from images -->
	<div id="simple-js-gallery-images"> <!-- === USE THAT ID TO SETUP THE GALLERY === -->
		<!-- === PUT ALL YOUR IMAGES HERE ACCORDING TO THE FOLLOWING EXAMPLES === -->
		<img src="./img/gallery/0.jpg" title="Lights in a circle"/>
		<img src="./img/gallery/1.jpg" title="A city by night"/>
		<!-- ETC. -->
	</div>

</section>
```

**4. Add your images**

You have to place all the images of your gallery into the div **"simple-js-gallery-images"**.

Title, thumbnails and arrow (to navigate through the images) are generated automatically.

**5. Enjoy!**

## Screenshot

[![Screenshot](https://framagit.org/pierrick/very-simple-javascript-image-gallery/-/raw/main/demo/screenshot.jpg)](https://framagit.org/pierrick/very-simple-javascript-image-gallery/-/raw/main/demo/screenshot.jpg)

## Usage

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

There are three options to display image in default vieuw mode:

* click on the image
* press key f
* press key escape

## Authors and acknowledgment

Developer: Pierrick MARIE

## License

This project is under *3-Clause BSD License*.

## Project status

The project is still under development.

# Badges

[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause) [![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com) [![made-with-html5](https://img.shields.io/badge/Made%20with-html5-%23E34F26.svg)](https://html.spec.whatwg.org/multipage/) [![made-with-CSS3](https://img.shields.io/badge/Made%20with-css3-%231572B6.svg)](https://www.w3.org/TR/css-2022/)
