/**
 * 
 * Manipuating the DOM exercise.
 * Exercise programmatically builds navlist,
 * scrolls to anchors from navlist,
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
// navlist global var
const navlist = document.getElementById('list');
// sections global var
const sec = document.querySelectorAll('section');

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
var sec2 = document.getElementsByTagName("section").length;


function function1() {
    for (var i = 0; i < sec2; i++) {
        var u = document.getElementById("list");

        var a = document.createElement("a");
        var n = i + 1;
        u.appendChild(a);
        a.setAttribute("href", "#section" + n);
        a.appendChild(document.createTextNode("\tsection" + n));

        a.setAttribute("id", n);


    }



}
function1();

function responsiveNav() {
    var u = document.getElementById("list");
    var li = document.createElement("li");
    var a = document.createElement("a");
    u.appendChild(a);
    a.setAttribute("href", "javascript:void(0);");
    a.setAttribute("class", "icon");
    a.setAttribute("onclick", "myFunction()");
    a.appendChild(li);
    li.setAttribute("class", "fa fa-bars");

}
// make navbar responsive
responsiveNav();

function myFunction() {
    var x = document.getElementById("navlist");
    if (x.className === "navlist") {
        x.className += " responsive";
    } else {
        x.className = "navlist";
    }
}




// getting the largest value that's less or equal to the number
const offset = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};

// remove the active class from section
const removeActive = (section) => {
    section.classList.remove('section-active');;
};
// adding the active class TO SECTION
const addActive = (conditional, section) => {
    if (conditional) {
        section.classList.add('section-active');

    };
};

//implementating the actual function

const sectionActivation = () => {
    sec.forEach(section => {
        const elementOffset = offset(section);

        inviewport = () => elementOffset < 150 && elementOffset >= -150;

        removeActive(section);
        addActive(inviewport(), section);
    });
};

window.addEventListener('scroll', sectionActivation);

// Scroll to anchor ID using scrollTO event

const scrolling = () => {

    const links = document.querySelectorAll('.menu a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            for (i = 0; i < sec; i++) {
                sec[i].addEventListener("click", seccroll(link));
            }
        });
    });

};

scrolling();



// Set sec as active NAV LINK
const removeActivenav = (li) => {
    li.classList.remove('active');

};
// adding the active class TO NAV LINK
const addActivenav = (conditional, li) => {
    if (conditional) {
        li.classList.add('active');

    };
};
onscroll = function() {
    var scrollPosition = document.documentElement.scrollTop;

    sec.forEach((section) => {
        if (
            scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 &&
            scrollPosition <
            section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25
        ) {
            var currentId = section.attributes.id.value;
            
            removeAllActiveNav();
            addActivenavClass(currentId);
        }
    });
};

var removeAllActiveNav = function() {
    document.querySelectorAll("nav a").forEach((el) => {
        el.classList.remove("active");
    });
};

var addActivenavClass = function(id) {
  
    var selector = `nav a[href="#${id}"]`;
    document.querySelector(selector).classList.add("active");
};
// scroll to section

const scrollLink = document.querySelectorAll(" a");

for (const SC of scrollLink) {
    SC.addEventListener("click", scrollfunction);
}

function scrollfunction(eL) {
    eL.preventDefault();
    const SECTIONLINK = this.getAttribute("href");
    const to = document.querySelector(SECTIONLINK).offsetTop;

    scroll({
        top: to,
        behavior: "smooth"
    });
}