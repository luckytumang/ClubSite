const navbarToggle = document.querySelector('#navbar-toggle');
const navbarMenu = document.querySelector('#navbar-menu');
const navbarLinksContainer = navbarMenu.querySelector('.navbar-links');
let isNavbarExpanded = navbarToggle.getAttribute('aria-expanded') === 'true';

const toggleNavbarVisibility = () => {
  isNavbarExpanded = !isNavbarExpanded;
  navbarToggle.setAttribute('aria-expanded', isNavbarExpanded);
};

navbarToggle.addEventListener('click', toggleNavbarVisibility);
navbarMenu.addEventListener('click', toggleNavbarVisibility);

// Show nav menu on desktop on initial load and when resized
window.addEventListener('load', () => {
  if (window.innerWidth >= 801) {
    navbarToggle.setAttribute('aria-expanded', false);
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 801) {
    isNavbarExpanded = false;
    navbarToggle.setAttribute('aria-expanded', false);
  }
});

// Intended to stop bubbling up clicks to navbarMenu
if (window.innerWidth >= 801) {
  navbarLinksContainer.addEventListener('click', (e) => e.stopPropagation());
}