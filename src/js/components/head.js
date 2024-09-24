export const hideHeader = () => {
  let lastScroll = 0;
  const defaultOffset = 100;               // расстояние после которого недер исчезнет
  const header = document.querySelector('.header');

  const scrollPosition = () => document.documentElement.scrollTop;
  const containHide = () => header.classList.contains('hide');

  window.addEventListener('scroll', () => {
    if (scrollPosition() > lastScroll && !containHide()) {
      // scroll down
      header.classList.add('hide');
      // console.log('down');
    } else if (scrollPosition() < lastScroll && containHide()) {
      // scroll up
      header.classList.remove('hide');
      // console.log('up');
    }

    lastScroll = scrollPosition();
  });
};
