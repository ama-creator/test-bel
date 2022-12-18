import openCategories from "./modules/categories.js";
import toggleMenu from "./modules/mobileMenu.js";
import showCategory from "./modules/mobileCategories.js";

// swiper
function swiperOne() {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
}
swiperOne();
