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
const navList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
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
function buildNav() {
    let innerHtmlCode = '';
    let sectionId;
    for (let section of sections) {
        innerHtmlCode += `<li class='menu__link' id='nav_${section.id}'>${section.dataset.nav}</li>`;
    }
    //populate navbar__list with its list elements
    navList.innerHTML = innerHtmlCode;
}
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
navList.addEventListener('click', function (evt) {
    //get clicked Menu Link Item in Navbar and set it is class to viewed (change in CSS)
    const requestedMenuLinkItem = document.getElementById(evt.target.id);
    setActiveMenuLink(requestedMenuLinkItem);

    //get section# (the required section id) from nav_section# (clicked nav list id) and set it as active
    const requestedSectionName = evt.target.id.split('_')[1];
    const requestedSection = document.getElementById(requestedSectionName);
    setActiveSection(requestedSection);
    requestedSection.scrollIntoView(); //go to index.html/#section
});

// Set sections as active
function setActiveSection(section) {
    //remove active class from old active section if exist
    document.querySelector('.your-active-class')?.classList.remove('your-active-class');

    //set section corresponding to clicked navbar as part of your-active-class class
    section.classList.add('your-active-class');
}


//Set menu link in navbar as active
function setActiveMenuLink(menuLinkItem) {
    //remove viewing class from old active menu link if exist
    document.querySelector('.viewing')?.classList.remove('viewing');

    //set clicked navbar as part of viewing class
    menuLinkItem.classList.add('viewing');
}
