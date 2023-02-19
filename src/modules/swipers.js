import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const swiper = new Swiper(".swiper.main-swiper", {
  direction: "horizontal",
  loop: false,
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
  },
  navigation: {
    nextEl: ".main-swiper .swiper-button-next",
    prevEl: ".main-swiper .swiper-button-prev",
  },
});

const swiperReviews = new Swiper(".swiper.reviews-swiper", {
  direction: "horizontal",
  loop: false,
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
  },
  navigation: {
    nextEl: ".reviews-swiper .swiper-button-next",
    prevEl: ".reviews-swiper .swiper-button-prev",
  },
});

const swiperPhotos = new Swiper(".swiper.photos-swiper", {
  direction: "horizontal",
  loop: false,
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
  },
  navigation: {
    nextEl: ".photos-swiper .swiper-button-next",
    prevEl: ".photos-swiper .swiper-button-prev",
  },
});
