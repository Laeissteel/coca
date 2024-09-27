export const useAccordionFoot = () => {
  const footerItem = document.querySelectorAll('.footer__item');
  const footerItemTitle = document.querySelectorAll('.footer__item-title');
  const footerSublist = document.querySelectorAll('.footer__sublist');

  const widthWindow = window.innerWidth;
  const width = 576;

  footerItem.forEach((el) => {
    if (widthWindow <= width) {
      el.classList.add('accordion-list');
    }
  });

  footerItemTitle.forEach((el) => {
    if (widthWindow <= width) {
      el.classList.add('accordion-list__control');
    }
  });

  footerSublist.forEach((el) => {
    if (widthWindow <= width) {
      el.classList.add('accordion-list__content');
    }
  });

  const accordionLists = document.querySelectorAll('.accordion-list');
  accordionLists.forEach((el) => {
    el.addEventListener('click', (e) => {
      const accordionList = e.currentTarget;
      const accordionOpenedItem = accordionList.querySelector(
        '.accordion-list__item--opened',
      );
      const accordionOpenedContent = accordionList.querySelector(
        '.accordion-list__item--opened .accordion-list__content',
      );

      const accordionControl = e.target.closest('.accordion-list__control');
      if (!accordionControl) return;
      e.preventDefault();
      const accordionItem = accordionControl.parentElement;
      const accordionContent = accordionControl.nextElementSibling;

      if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
        accordionOpenedItem.classList.remove('accordion-list__item--opened');
        accordionOpenedContent.style.maxHeight = null;
      }

      accordionItem.classList.toggle('accordion-list__item--opened');

      if (accordionItem.classList.contains('accordion-list__item--opened')) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      } else {
        accordionContent.style.maxHeight = null;
      }
    });
  });
};
