# Very Simple JavaScript Image Gallery

This is a very simple, lightweith and standalone image gallery developped in JavaScript with JQuery.

# Why another image gallery in JavaScript ?

I had to install a lightweight image gallery on a USB key. The gallery had to run without any internet connection. Moreover I wanted to be absolutly sure of the behaviour of the programme: displaying images whatever their size and no more!

I conclued I will spend less time in developing my own image gallery instead of reviewing existing ones.

The gallery is programmed to run in "full screen" mode. To reduce the size of the gallery, you have to modify the CSS.

## Clone the repository

Get the source code with the following command

```
git clone https://framagit.org/pierrick/very-simple-javascript-image-gallery.git
```

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
<!-- Main place for the images -->
<section class="gallery">

	<!-- Display previous image -->
	<img id="left-arrow" class="arrow" src="./img/utils/left.png"/>

	<!-- Display next image -->
	<img id="right-arrow" class="arrow" src="./img/utils/right.png"/>

	<!-- The area for the images. -->
	<!-- === PUT ALL YOUR IMAGES HERE ACCORDING TO THE FOLLOWING EXAMPLES === -->
	<div class="images">
		<img src="./img/gallery/0.jpg"/>
		<img src="./img/gallery/1.jpg"/>
		<img src="./img/gallery/2.jpg"/>
		<img src="./img/gallery/3.jpg"/>
		<img src="./img/gallery/4.jpg"/>
		<img src="./img/gallery/5.jpg"/>
		<img src="./img/gallery/6.jpg"/>
		<img src="./img/gallery/7.jpg"/>
		<img src="./img/gallery/8.jpg"/>
		<img src="./img/gallery/9.jpg"/>
	</div>

	<!-- The thumbnails area -->
        <!-- === LET THIS DIV EMPTY === -->
	<section class="thumbnails">
	</section>

</section>
```

**4. Add your images**

You have to place all the images of your gallery into the div **"images"**.

The thumbnails will be automatically placed into the div **thumbnails**.

**5. Enjoy!**

## Authors and acknowledgment

Developer: Pierrick MARIE

## License

This project is under *3-Clause BSD License*.

## Project status

The project is still under development.

# Badges

[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause) [![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com) [![made-with-html5](https://img.shields.io/badge/Made%20with-html5-%23E34F26.svg)](https://html.spec.whatwg.org/multipage/) [![made-with-CSS3](https://img.shields.io/badge/Made%20with-css3-%231572B6.svg)](https://www.w3.org/TR/css-2022/)
