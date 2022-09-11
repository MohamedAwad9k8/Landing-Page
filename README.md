# Landing Page Project

## Table of Contents

* [Instructions](#instructions)

* [Functions](#Functions)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the Udacity Classroom.

## Functions

1. Build Nav Bar Function. <br> 
That checks for the DOM when it's ready, using the `DOMContentLoaded` event. Then it starts building the Nav Bar Dynamically, by iterating over all the sections and creating list items `<li></li>`, then it appends anchor elements `<a></a>` inside the list items.
The Function also makes use of the Fragment element to save reflow and repaint cost.

2. Check for Active Section Function. <br>
This function uses the `getBoundingClientRect()` method to identify which section is the currently active section, then it adds `class-active-section` to it, which in turn gives the section some animations in the background so it looks more live.

3. Scroll Smoothly Function. <br>
This function overrides the defaul instant jump of the anchor element, it makes use of the `getBoundingClientRect()` to scroll smoothly to the right destination.

4. Toggle Hide Nav Bar. <br>
This function will hide the Nav Bar when it's idle, meaning the user isn't scrolling the page.
when the user starts scrolling, the Nav Bar would appear again to the user.

5. Scroll Back to Top Functions. <br>
This button has two functions, one of them hides the button when the page is at the top, and displays it when the page is scrolled down.
The other function scrolls to the top when the button is clicked.