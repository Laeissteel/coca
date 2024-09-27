export const useAccordionFoot = () => {
  const footerItem = document.querySelectorAll('.footer__item');
  const footerItemTitle = document.querySelectorAll('.footer__item-title');
  const footerSublist = document.querySelectorAll('.footer__sublist');

  if (footerItem.length === 0 || footerItemTitle.length === 0 || footerSublist.length === 0) {
        return;
      }
      
  const width = 576;

  const addClassFooter = () => {

    footerItem.forEach((el) => {
        el.classList.add('accordion-list');
    });
  
    footerItemTitle.forEach((el) => {
        el.classList.add('accordion-list__control');
    });
  
    footerSublist.forEach((el) => {
      el.classList.add('accordion-list__content')
    });
  }

  const removeClassFooter = () => {
    footerItem.forEach((el) => {
      el.classList.remove('accordion-list');
  });

  footerItemTitle.forEach((el) => {
      el.classList.remove('accordion-list__control');
  });

  footerSublist.forEach((el) => {
    el.classList.remove('accordion-list__content')
  });
  }
  

  
  const addEventListeners = () => {
    const accordionLists = document.querySelectorAll('.accordion-list');
    accordionLists.forEach((el) => {
      el.addEventListener('click', (e) => {
        console.log('click')
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
  }

    const removeEventListeners = () => {
    accordionLists.forEach((el) => {
      el.removeEventListener('click', () => {});
    });
  };

  const mobileAccordion = () => {
    if(window.innerWidth <= width) {
      addClassFooter();
      addEventListeners();
    } else {
      removeClassFooter();
      removeEventListeners();
    }
  }

  window.addEventListener('resize', mobileAccordion);
  mobileAccordion();

};