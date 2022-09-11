/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sectionsNodeList = document.querySelectorAll('section');
const navBarUL = document.querySelector('#navbar__list');
let currentlyActivated = '';
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
/*
Using QuerySelectorAll() to acquire a node list of all the section elemnets
Iterating over all the nodes in the node list
then we create new list item that has a child anchor element
Updating the Anchor element with the section name, and the section id for the href
Adding each new list item to the fragment, to avoid high cost of reflows and repaints
Finally we add the fragment to the ul element, so that it's displayed to the user
*/

let buildNavBar = function(){
    
    const fragment = document.createDocumentFragment();

    for(node of sectionsNodeList){
        const newItemList = document.createElement('li');
        const newAnchorElement = document.createElement('a');
        newAnchorElement.textContent = node.getAttribute('data-nav');
        const sectionId = '#' + node.getAttribute('id');
        newAnchorElement.setAttribute('href',sectionId);
        newItemList.appendChild(newAnchorElement);
        fragment.appendChild(newItemList);
    }

    
    navBarUL.appendChild(fragment);
}

// Add class 'active' to section when near top of viewport
/*
Adding a scroll event listenr to the document
Adding a listener function addActiveClass()
Iterating over the node list to calculate the nearst section to viewport top (The Active Section)
Using if conditionals and global varaible currentlyActivated to check if the Active Section has been changed
In that case, remove the active class from the exited section, add active class to the entered section
*/
let addActiveClass = function(event){
let distanceToTop = 7000;
let activeSectionId = '';
    for(node of sectionsNodeList){
        const currentNodeSectionId = '#' + node.getAttribute('id');
        const currentNodeSectionTop = Math.abs(node.getBoundingClientRect().top);
        if ( currentNodeSectionTop < distanceToTop){
            distanceToTop = currentNodeSectionTop;
            activeSectionId = currentNodeSectionId;    
        }
        
    }
    if (currentlyActivated === ''){
        currentlyActivated = activeSectionId;
    }
    if (activeSectionId === currentlyActivated){
        document.querySelector(activeSectionId).classList.add("your-active-class");  
    }
    else{
        document.querySelector(currentlyActivated).classList.remove("your-active-class");
        document.querySelector(activeSectionId).classList.add("your-active-class");
        currentlyActivated = activeSectionId;
    }
}


// Scroll to anchor ID using scrollTO event

/*
Declaring scrollSmoothly() function, that will be used as the listenr function
Adding an event listenr to the click event on the Nav Bar, to prevent the default
Using the getBoundingClientRect() to get the coordinates of the destianation
And window.scrollBy to scroll smoothly to the destination
*/

let scrollSmoothly = function(event){
    console.log(event.target);
    if (event.target.tagName.toLowerCase() === "a"){
        event.preventDefault();
        let scrollTargetId = event.target.getAttribute('href');
        let scrollTargetElemnet = document.querySelector(scrollTargetId).querySelector('h2');
        let targetRect = scrollTargetElemnet.getBoundingClientRect();
        window.scrollBy({top: targetRect.y- (3*Number(targetRect.height)) , left: 0, behavior: 'smooth'});
    }
}

//Hide the Nav Bar if the user doesn't scroll for a while
let toggleHideNavBar = function(event){ 
    navBarUL.parentElement.classList.remove("navbar__idle");
    setTimeout(function(){navBarUL.parentElement.classList.add("navbar__idle");},5000);       
}


//Scroll Back To Top Button
/*
A listener function that scrolls to the top of the page, whose event type is click
and another listener function, that adds a button__hidden class to the hide the button, when the page
is at the top
If the user scroll down past 500px, the class is removed and the button is displayed
*/
let scrollToTopButton = document.querySelector('#scroll__top__button');

let goToTop = function(){
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
};

let checkScroll = function(){
    if(document.body.scrollTop < 500){
        scrollToTopButton.classList.add("button__hidden");
    }
    else{
        scrollToTopButton.classList.remove("button__hidden");
    }
};


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
document.addEventListener('DOMContentLoaded', buildNavBar);
// Scroll to section on link click
navBarUL.addEventListener('click', scrollSmoothly);
// Set sections as active
document.addEventListener('scroll',addActiveClass);
// Toggle Hiding the Nav Bar if idle
document.addEventListener('scroll',toggleHideNavBar);
// Scroll Back to Top
document.addEventListener('scroll',checkScroll);
scrollToTopButton.addEventListener('click',goToTop); 