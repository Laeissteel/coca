import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export const useInsightSlider = () => {
  new Swiper('.insight__slider', {
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
    spaceBetween: 22,
    slidesPerView: 'auto',
    loop: true,
    navigation: {
      nextEl: '.testimonials__btn--next',
      prevEl: '.testimonials__btn--prev',
    },
  });
};
