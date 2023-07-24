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

const toggleMenu = document.querySelector('.toggle-menu');
const navLink = document.querySelector('.nav-link');

toggleMenu.addEventListener('click', () => {
    navLink.classList.toggle('open-navlink');
    wrapperNavbar.classList.toggle('wrapper-height');
});


const btnExplore = document.querySelector('.btn-hero-explore');
btnExplore.addEventListener('click', () => {
    window.location.href = '#triger-card';
});

const btnSchedule = document.querySelector('.btn-hero-schedule');
btnSchedule.addEventListener('click', () => {
    window.location.href = '#contact';
});

function btnLocation() {
    window.location.href = 'https://goo.gl/maps/jEcaYjfJsBp2kjxK6';
};

// frequently ask question
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
