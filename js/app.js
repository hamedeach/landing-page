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
 * Define Global Variables
 * 
*/

// create doc fragment to load all sections 


// variable for the existing sections in the page

// variable for the existing Navigation list


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// 
function respondToTheClick(evt) {
    if (evt.target.nodeName.toLowerCase() === 'li'){
        const selectedSection =document.getElementById(evt.target.getAttribute("data-section-id"));
        selectedSection.classList.add('your-active-class');
        selectedSection.scrollIntoView();
        selectedSection.scrollIntoView(false);
        selectedSection.scrollIntoView({block: "end"});
        selectedSection.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    }
}


function buildNav(){
    let currentNavList = document.getElementById('navbar__list');
    const myCustomDiv = document.createElement('div');
    const currentSections = document.getElementsByTagName('section');
    for (let i = 1; i <= currentSections.length; i++) {
        let newElement = document.createElement('li');
        newElement.textContent = currentSections[i-1].getAttribute("data-nav") ;
        newElement.setAttribute("id", 'nav-section'+i);
        newElement.setAttribute("data-section-id", 'section'+i);
        newElement.classList.add('menu__link');
        newElement.classList.add('navbar__menu');
        myCustomDiv.appendChild(newElement);
    }
    myCustomDiv.addEventListener('click', respondToTheClick);
    currentNavList.appendChild(myCustomDiv);
}




/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

buildNav();


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

