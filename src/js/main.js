import '/scss/main.scss';

// components

import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import {
  useInsightSlider,
  useTestimonialsSlider,
} from './components/home/slider.js';
import { hideHeader } from './components/head.js';

useTheme();
useBurger();
useInsightSlider();
useTestimonialsSlider();
hideHeader();
