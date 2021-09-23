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


// intersection observer API  threshold  = 70%
const observer = new IntersectionObserver(observerFunc, {
    threshold: [0.7]

});


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// 
/*
function for the intersection observer API, this function used to remove active class for all sections and add active class to the section on the viewport
*/
function observerFunc (observersSection) {

    if (observersSection[0].isIntersecting) {
        removeActiveSection();
        let currentSection = observersSection[0].target
        currentSection.classList.add('your-active-class');
    }


}

/*
Helper function used to remove active class from all section 
*/
function removeActiveSection() {
    const currentSections = document.getElementsByTagName('section');
    for (let i = 0; i < currentSections.length; i++) {
        currentSections[i].classList.remove('your-active-class');
    }
};

/*
callback function for nav buttons click, this function used to scroll to selected section 
*/
function respondToTheClick(evt) {
    if (evt.target.nodeName.toLowerCase() === 'li') {
        const selectedSection = document.getElementById(evt.target.getAttribute("data-section-id"));
        selectedSection.scrollIntoView();
        selectedSection.scrollIntoView(false);
        selectedSection.scrollIntoView({ block: "end" });
        selectedSection.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }
};

/*
function used to create nav button according to added sections 
*/
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




/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// call building function at page load
buildNav();






