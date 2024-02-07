import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
  const burgerButton = document.querySelector('.burger__button') as HTMLElement;
  const mobileNav = document.querySelector('.mobile__nav') as HTMLElement;
  const mobileNavLinks = document.querySelectorAll('.mobile__nav .nav__link') as NodeListOf<HTMLElement>;

  if (burgerButton && mobileNav) {
    burgerButton.addEventListener('click', () => {
      mobileNav.classList.toggle('active');
      burgerButton.classList.toggle('active');
    });
  }

  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('active');
      burgerButton.classList.remove('active');
    });
  });

  document.addEventListener('click', (event: MouseEvent) => {
    if (mobileNav && burgerButton) {
      const isClickInsideNav = mobileNav.contains(event.target as Node);
      const isClickInsideBurgerButton = burgerButton.contains(event.target as Node);

      if (!isClickInsideNav && !isClickInsideBurgerButton) {
        mobileNav.classList.remove('active');
        burgerButton.classList.remove('active');
      }
    }
  });
});
