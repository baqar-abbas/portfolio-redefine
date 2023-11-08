// Mobile Menu links Popup
const navMenu = document.querySelector('.nav-menu');
const cross = document.querySelector('#cross');
const mobileMenu = document.querySelector('.mobile-menu');
const hamMenu = document.querySelector('#hamburger-menu');

const menuOpen = (event) => {
  navMenu.style.display = 'none';
  mobileMenu.style.width = '100vw';
  event.preventDefault();
};

const menuClose = () => {
  navMenu.style.display = 'block';
  mobileMenu.style.width = '0';
};

hamMenu.addEventListener('click', menuOpen);
cross.addEventListener('click', menuClose);
mobileMenu.addEventListener('click', menuClose);