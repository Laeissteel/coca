import '/scss/pricing.scss';

// components

import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { usePriceSwitcher } from './components/pricing/priceSwitcher.js';
import { hideHeader } from './components/head.js';
import { useAccordionFoot } from './components/footer.js';

useTheme();
useBurger();
usePriceSwitcher();
hideHeader();
useAccordionFoot();