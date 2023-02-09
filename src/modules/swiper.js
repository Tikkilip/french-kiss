import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const swiper = new Swiper(".swiper.main-swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 2,
  navigation: {
    nextEl: ".main-swiper .swiper-button-next",
    prevEl: ".main-swiper .swiper-button-prev",
  },
});
