import footnoteText from './footnote-text.js';

// func collapses expanded nav when menu item clicked
const collapseNav = (e) => {
    let expandedNav = document.querySelector('#navbar__toggle')
    let expNavClassListArr = Array.from(expandedNav.classList);
    let newClassListArr = expNavClassListArr.filter(el => el !== "show")
    expandedNav.classList = newClassListArr.join(" ");
}

// apply func to items with "navbar__item" class, added to all nav items incl nav-brand
let navItem = document.querySelectorAll('.navbar__item');

if (window.innerWidth < 1200) {
    navItem.forEach(el => {
        el.addEventListener('click', collapseNav)
    })
}

const renderPopovers = () => {
    // insert popover code inside span; "focus" trigger dismisses on next click
    document.querySelectorAll('.note-main').forEach(item => {
        let footnoteNum = item.id.slice(2)
        //grab item
        //slice off fn to grab #
        //insert Content based on #

        item.innerHTML += `<a tabindex="0" role="button" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-html="true" data-bs-content="${footnoteText[footnoteNum]}">${footnoteNum}</a> `
    })
}

const renderEndnotes = () => {
    // append endNote li elements to bibliography container
    let endNotesContainer = document.querySelector(".endnotes__ul");

    for (let key in footnoteText) {
        let endNote = `<li class="text-break"><a href="#fn${key}"><span class="note-end" id="fn${key}b">${key} </span></a>${footnoteText[key]}</li>`;

        endNotesContainer.insertAdjacentHTML('beforeEnd', endNote);
    }
}

renderPopovers();
renderEndnotes();


// Enable popovers everywhere
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
})

const toggleAccordionLabel = () => {
    let labelText = document.getElementById("endnotesToggleBtnTxt");
    if (labelText.innerText === "Display") {
        labelText.innerText = "Hide"
    } else {
        labelText.innerText = "Display"
    }
}
let accordionBtn = document.getElementById("endnotesToggleBtn");
accordionBtn.addEventListener('click', toggleAccordionLabel)


// manual scrollspy (bootstrap v 5 doesn't work)

//.section-scrollspy excludes Colleges header, AU Map, About
const sections = document.querySelectorAll(".section__scrollspy");
const menuLinks = document.querySelectorAll(".navbar__item");
const collegeHeader = document.querySelector('a#dropdownMenuLink');

const makeActive = (link) => menuLinks[link].classList.add("active");
const removeActive = (link) => menuLinks[link].classList.remove("active");
const removeAllActive = () => [...Array(sections.length).keys()].forEach((link) => removeActive(link));

// for scroll offset
const sectionMargin = 600;
// section currently in view
let currentActive = 0;
// indices of sections arr that are colleges
let collegeList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const aboutDiv = document.getElementById("about__wrapper");
const mainDiv = document.getElementById("main__wrapper");
const aboutNav = menuLinks[14]
const mainNav = [...menuLinks].slice(0, 12);

// scroll not enabled when about-content displayed
window.addEventListener("scroll", () => {

    if (mainDiv.style.display === "block" || mainDiv.style.display === "") {
        // check position and update nav class
        const current = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - sectionMargin) - 1;

        if (current !== currentActive) {
            removeAllActive();
            currentActive = current;
            makeActive(current);
        }

        // if a college section is in view, highlight "Colleges" dropdown header
        if (collegeList.includes(currentActive)) {
            collegeHeader.classList.add("navbar__dropdown-active");
        } else if (collegeHeader.classList.contains("navbar__dropdown-active")) {
            collegeHeader.classList.remove("navbar__dropdown-active");
        }
    }
});



// scroll handles add/remove "active" class on click, except for Planning nav (problem w/scroll on 1st section), and About section (no scroll effect applied). navClickHandler also changes content divs.
const navClickHandler = (e) => {
    const clickedItem = e.target;

    if (clickedItem.innerText === "This Project") {
        if (aboutDiv.style.display === "" || aboutDiv.style.display === "none") {
            aboutDiv.style.display = "block"
            mainDiv.style.display = "none"
            mainNav.forEach(el => {
                if (el.classList.contains("active")) {
                    el.classList.remove("active")
                }
            })
            collegeHeader.classList.remove("navbar__dropdown-active");
            aboutNav.classList.add("active")
        }
    } else {
        if (aboutDiv.style.display === "block") {
            aboutDiv.style.display = "none"
            mainDiv.style.display = "block"
            aboutNav.classList.remove("active")
            // clicking Planning nav from About, doesn't scroll & active class not added to P
            if (clickedItem.innerText === "Planning") {
                if (!clickedItem.classList.contains("active")) {
                    clickedItem.classList.add("active")
                }
            }
        }
    }
}

menuLinks.forEach(el => {
    el.addEventListener('click', navClickHandler)
});


