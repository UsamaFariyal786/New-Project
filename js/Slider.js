
var swiper = new Swiper(".mySwiper", {

  spaceBetween: 30,
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 1000
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,

    },
    480: {
      slidesPerView: 2,

    },
    768: {
      slidesPerView: 3,

    },
    1200: {
      slidesPerView: 4,

    },
  },
});
