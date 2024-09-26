import { fa } from 'intl-tel-input/i18n';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

export const useInsightSlider = () => {
  new Swiper('.insight__slider', {
    modules: [Navigation, Autoplay],
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    navigation: {
      nextEl: '.insight__slider-btns--next',
      prevEl: '.insight__slider-btns--prev',
    },
    centeredSlides: true,
    breakpoints: {
      769: {
        centeredSlides: false,
      },
    },
  });
};

export const useTestimonialsSlider = () => {
  new Swiper('.testimonials__slider', {
    slidesPerView: 1,
    loop: true,
  });
};