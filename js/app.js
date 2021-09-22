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



const observer = new IntersectionObserver(function (observersSection) {

    if (observersSection[0].isIntersecting) {
        removeActiveSection();
        let currentSection = observersSection[0].target
        currentSection.classList.add('your-active-class');
       
    }


}, {
    threshold: [0.8]

});


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// 
function removeActiveSection() {
    const currentSections = document.getElementsByTagName('section');
    for (let i = 0; i < currentSections.length; i++) {
        currentSections[i].classList.remove('your-active-class');
    }
};

function respondToTheClick(evt) {
    if (evt.target.nodeName.toLowerCase() === 'li') {
        removeActiveSection();
        const selectedSection = document.getElementById(evt.target.getAttribute("data-section-id"));
        selectedSection.classList.add('your-active-class');
        selectedSection.scrollIntoView();
        selectedSection.scrollIntoView(false);
        selectedSection.scrollIntoView({ block: "end" });
        selectedSection.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

    }
};


function buildNav() {
    let currentNavList = document.getElementById('navbar__list');
    const myCustomDiv = document.createElement('div');
    const currentSections = document.getElementsByTagName('section');
    for (let i = 1; i <= currentSections.length; i++) {
        let newElement = document.createElement('li');
        observer.observe(currentSections[i - 1]);
        newElement.textContent = currentSections[i - 1].getAttribute("data-nav");
        newElement.setAttribute("id", 'nav-section' + i);
        newElement.setAttribute("data-section-id", 'section' + i);
        newElement.classList.add('menu__link');
        newElement.classList.add('navbar__menu');
        myCustomDiv.appendChild(newElement);
    }
    myCustomDiv.addEventListener('click', respondToTheClick);
    currentNavList.appendChild(myCustomDiv);
}











/*
function getscreenSize() {
    return [ window.screen.width, window.screen.height];
}

function update() {

    const currentSections = document.getElementsByTagName('section');
    const rect = currentSections[0].getBoundingClientRect();
        console.log("");
        console.log("");
        console.log("---------------------------------------------------");
        console.log( currentSections[0].getAttribute("data-nav") );
        console.log(rect.top);
        console.log('screen size w='+window.screen.width+" H="+window.screen.height);
        console.log("---------------------------------------------------");
    
    for (let i = 1; i <= currentSections.length; i++) {
        const rect = currentSections[i-1].getBoundingClientRect();
        console.log("");
        console.log("");
        console.log("---------------------------------------------------");
        console.log( currentSections[i-1].getAttribute("data-nav") );
        console.log(rect);
        console.log('screen size w='+window.screen.width+" H="+window.screen.height);
        console.log("---------------------------------------------------");

    }
    

  }
  */

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

