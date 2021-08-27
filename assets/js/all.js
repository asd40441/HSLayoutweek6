"use strict";

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});
//# sourceMappingURL=all.js.map
