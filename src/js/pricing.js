import '/scss/pricing.scss';

// components

import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { usePriceSwitcher } from './components/pricing/priceSwitcher.js';
import { hideHeader } from './components/head.js';

useTheme();
useBurger();
usePriceSwitcher();
hideHeader();