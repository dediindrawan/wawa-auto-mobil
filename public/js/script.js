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

// toggle menu to open navbar
function toggleMenu() {
    const navLink = document.querySelector('.nav-link');

    navLink.classList.toggle('open-navlink');
    wrapperNavbar.classList.toggle('wrapper-height');
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
