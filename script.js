const navbarLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    // Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu")
});

// Close menu whem the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

//close menu when nav link is clicked
navbarLinks.forEach((link) => {
    link.addEventListener("click", () => menuOpenButton.click() );
});

/* Initializing Swiper */
let Swiper = new Swiper(".slider-wrapper",{
    loop: true,
    grabCursor: true,
    spaceBetween: 25,

    // Pagination bullets
    pagination: {
        el: ".swiper-pgination",
        clickable: true,
        dynamicBullet: true,
    },

    // Navigation arrows
    navigation: {
        nextEL: ".swiper-button-next",
        prevEL: ".swiper-button-prev",
    },

    /* Responsive breakpoints */
    breakpoints: {
        0: {
            slidesperview: 1,
        },
        768: {
            slidesperview: 2,
        },
        1024: {
            slidesperview: 3,
        },
    },
} );