// change background color on navbar when the window on scrolling
const lastScrollTop = 0;
const wrapperNavbar = document.querySelector('.wrapper-navbar');
window.addEventListener('scroll', function () {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop !== lastScrollTop) {
        wrapperNavbar.classList.add('background-navbar');
    } else {
        wrapperNavbar.classList.remove('background-navbar');
    };
});

// add class active on navigation menu
const navLinkList = document.querySelectorAll('.nav-link li');
navLinkList.forEach(nav => {
    nav.addEventListener('click', () => {
        // Remove 'active' class from all navigation elements
        navLinkList.forEach(otherNav => {
            if (otherNav !== nav && otherNav.classList.contains('active')) {
                otherNav.classList.remove('active');
            }
        });
        // Add 'active' class to the clicked navigation element
        if (!nav.classList.contains('active')) {
            nav.classList.add('active');
            // console.log(nav)
        }
    });
});

// create function to open navigation menu when toggle menu onclick
const toggleMenu = document.querySelector('.toggle-menu');
const navLink = document.querySelector('.nav-link');
const containerOverlay = document.querySelector('.container');
// clicking on toggle menu to open and close navigation menu
toggleMenu.onclick = function () {
    navLink.classList.toggle('open-navlink');
    wrapperNavbar.classList.toggle('wrapper-height');
    containerOverlay.classList.toggle('overlay');
    if (navLink.classList.contains('open-navlink') && wrapperNavbar.classList.contains('wrapper-height')) {
        document.querySelector('.toggle-open').style.display = 'none';
        document.querySelector('.toggle-close').style.display = 'block';
    } else {
        document.querySelector('.toggle-open').style.display = 'block';
        document.querySelector('.toggle-close').style.display = 'none';
    }
};
// click outside to close navigation menu with or without click toggle menu
document.onclick = function (e) {
    if (!toggleMenu.contains(e.target) && !navLink.contains(e.target)) {
        navLink.classList.remove('open-navlink');
        wrapperNavbar.classList.remove('wrapper-height');
        containerOverlay.classList.remove('overlay');
        document.querySelector('.toggle-open').style.display = 'block';
        document.querySelector('.toggle-close').style.display = 'none';
    };
};

function btnExplore() {
    window.location.href = '#triger-card';
};

function btnSchedule() {
    window.location.href = '#contact';
};

function btnLocation() {
    window.location.href = 'https://goo.gl/maps/jEcaYjfJsBp2kjxK6';
};

// package list accordion
const btnPackage = document.querySelectorAll('.btn-package');
btnPackage.forEach(packages => {
    packages.addEventListener('click', () => {
        const panel = packages.nextElementSibling;
        const icon = packages.children;
        const icons = icon[0];

        if (panel.style.display === 'block') {
            panel.style.display = 'none';
            icons.classList.remove('rotate-up');
        } else {
            panel.style.display = 'block';
            icons.classList.add('rotate-up');
        };
    });
});

// frequently ask question accordion
const btnAccordion = document.querySelectorAll('.btn-accordion');
btnAccordion.forEach(accordions => {
    accordions.addEventListener('click', () => {
        const panel = accordions.nextElementSibling;
        const icon = accordions.children;
        const icons = icon[0];

        if (panel.style.display === 'block') {
            panel.style.display = 'none';
            icons.classList.remove('rotate-up');
        } else {
            panel.style.display = 'block';
            icons.classList.add('rotate-up');
        };
    });
});

// set update year of copyright automatically
let copyYear = document.querySelector('.copy-year'),
    date = new Date(), year;

year = date.getFullYear();

copyYear.textContent = `${year}`;
