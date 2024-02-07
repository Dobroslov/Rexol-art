import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
  const burgerButton = document.querySelector('.burger__button') as HTMLElement;
  const mobileNav = document.querySelector('.mobile__nav') as HTMLElement;

  if (burgerButton && mobileNav) {
    burgerButton.addEventListener('click', () => {
      mobileNav.classList.toggle('active');
      burgerButton.classList.toggle('active');
      if (mobileNav.classList.contains('active')) {
        mobileNav.style.display = 'block';
      } else {
        mobileNav.style.display = 'none';
      }
    });
  }

  document.addEventListener('click', (event: MouseEvent) => {
    if (mobileNav && burgerButton) {
      const isClickInsideNav = mobileNav.contains(event.target as Node);
      const isClickInsideBurgerButton = burgerButton.contains(event.target as Node);

      if (!isClickInsideNav && !isClickInsideBurgerButton) {
        mobileNav.classList.remove('active');
        burgerButton.classList.remove('active');
        mobileNav.style.display = 'none';
      }
    }
  });
});
