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
        }
    });
});


// click outside without close menu automatically
// const navLinkContent = document.getElementById('nav-link-content');
// const toggleMenuButton = document.querySelector('.toggle-menu');
// let isMenuOpen = false;

// function toggleMenu() {
//     navLinkContent.classList.toggle('open-navlink');
//     wrapperNavbar.classList.toggle('wrapper-height');
//     isMenuOpen = navLinkContent.classList.contains('open-navlink');
// }

// // Event listener untuk tombol toggle-menu
// toggleMenuButton.addEventListener('click', (event) => {
//     event.stopPropagation(); // Menghentikan penanganan klik lebih lanjut, karena akan ditangani oleh event mousedown
//     toggleMenu();
// });

// // Event listener untuk menutup menu saat klik di luar elemen menu atau tombol toggle-menu
// document.addEventListener('mousedown', (event) => {
//     const targetElement = event.target;
//     const isClickInsideMenu = navLinkContent.contains(targetElement);
//     const isClickToggleMenuButton = targetElement.classList.contains('toggle-menu');
//     const isActiveNavItem = targetElement.closest('.nav-link > li.active');

//     // Jika klik dilakukan di luar elemen menu dan bukan di tombol toggle-menu atau elemen 'active'
//     if (!isClickInsideMenu && !isClickToggleMenuButton && !isActiveNavItem) {
//         if (isMenuOpen) {
//             toggleMenu();
//         }
//     }
// });



// click outside with close menu automatically
const navLinkContent = document.getElementById('nav-link-content');
const toggleMenuButton = document.querySelector('.toggle-menu');
let isMenuOpen = false;

function toggleMenu() {
    navLinkContent.classList.toggle('open-navlink');
    wrapperNavbar.classList.toggle('wrapper-height');
    isMenuOpen = navLinkContent.classList.contains('open-navlink');
}

// Event listener untuk tombol toggle-menu
toggleMenuButton.addEventListener('click', () => {
    toggleMenu();
});

// Event listener untuk menutup menu saat klik di luar elemen menu atau tombol toggle-menu
document.addEventListener('mousedown', (event) => {
    const targetElement = event.target;
    const isClickInsideMenu = navLinkContent.contains(targetElement);
    const isClickToggleMenuButton = targetElement.classList.contains('toggle-menu');
    const isActiveNavItem = targetElement.closest('.nav-link > li.active');

    // Jika klik dilakukan di luar elemen menu dan bukan di tombol toggle-menu atau elemen 'active'
    if (!isClickInsideMenu && !isClickToggleMenuButton && !isActiveNavItem) {
        if (isMenuOpen) {
            toggleMenu();
        }
    }
});

// Event listener untuk menutup menu saat salah satu menu di dalamnya diklik
const navLinkItems = document.querySelectorAll('.nav-link > a');
navLinkItems.forEach(item => {
    item.addEventListener('click', () => {
        if (isMenuOpen) {
            toggleMenu();
        }
    });
});








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
