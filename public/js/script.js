// change background color on navbar when the window on scrolling
const lastScrollTop = 0;
const wrapperNavbar = document.querySelector('.wrapper-navbar');
window.addEventListener('scroll', function () {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    // if wrapper navbar not on the top of browser window
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
        }
    });
});

// create function to open navigation menu when toggle menu onclick
const toggleMenu = document.querySelector('.toggle-menu');
const navLink = document.querySelector('.nav-link');
const containerOverlay = document.querySelector('.container');
// clicking on the toggle menu icon to open and close navigation menu
toggleMenu.onclick = function () {
    navLink.classList.toggle('open-navlink');
    wrapperNavbar.classList.toggle('wrapper-height');
    containerOverlay.classList.toggle('overlay');
    // change icon if navigation menu is open or close
    if (navLink.classList.contains('open-navlink') && wrapperNavbar.classList.contains('wrapper-height')) {
        document.querySelector('.toggle-open').style.display = 'none';
        document.querySelector('.toggle-close').style.display = 'block';
    } else {
        document.querySelector('.toggle-open').style.display = 'block';
        document.querySelector('.toggle-close').style.display = 'none';
    }
};
// click the outside to close navigation menu with or without clicking toggle menu icon
document.onclick = function (e) {
    if (!toggleMenu.contains(e.target) && !navLink.contains(e.target)) {
        navLink.classList.remove('open-navlink');
        wrapperNavbar.classList.remove('wrapper-height');
        containerOverlay.classList.remove('overlay');
        document.querySelector('.toggle-open').style.display = 'block';
        document.querySelector('.toggle-close').style.display = 'none';
    };
};

// btn hero explore function
function btnHeroExplore() {
    window.location.href = '#middle-line-card';
};

// btn hero contact function
function btnHeroContact() {
    window.location.href = '#contact';
};

// btn direction function
function btnDirection() {
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
const btnFaq = document.querySelectorAll('.btn-faq');
btnFaq.forEach(faq => {
    faq.addEventListener('click', () => {
        const description = faq.nextElementSibling;
        const icons = faq.children;
        const icon = icons[0];

        if (description.style.display === 'block') {
            description.style.display = 'none';
            icon.classList.remove('rotate-up');
        } else {
            description.style.display = 'block';
            icon.classList.add('rotate-up');
        };
    });
});

// set update year of copyright automatically
let copyYear = document.querySelector('.copy-year'),
    date = new Date(), year;
year = date.getFullYear();
copyYear.textContent = `${year}`;


const data = "/server-side/data.json";
const wrapperItem = document.querySelector('.wrapper-item');

function getListItem() {
    fetch(data)
        .then(response => {
            return response.json();
        }).then(responseJson => {
            wrapperItem.innerHTML = '';
            let items = responseJson.product;
            items.forEach(element => {
                wrapperItem.innerHTML +=
                    `
                    <li class="list-item" onclick="openOverlay()">
                        <figure>
                            <img class="image-item"
                                src="${element.image}"
                                alt="image">
                            <small class="category-item">${element.category}</small>
                        </figure>
                        <figcaption>
                            <div class="title-item">${element.title}</div>
                            <div class="price-item">Rp${element.price},-</div>
                            <span>
                                <small class="location-item"><i class="fa-solid fa-map-location"></i> ${element.location}</small>
                                <small class="rating-item"><i class="fa-solid fa-star"></i> ${element.rating}</small>
                            </span>
                            <div class="description-item">${element.decription}</div>
                        </figcaption>
                    </li>
                `
            });

        }).catch(error => {
            console.error(error);
        });
};
getListItem();