import '/scss/contact.scss';

// components

import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { usePhone } from './components/contact/phone.js';
import { hideHeader } from './components/head.js';
import { useAccordionFoot } from './components/footer.js';

useTheme();
useBurger();
usePhone();
hideHeader();
useAccordionFoot();