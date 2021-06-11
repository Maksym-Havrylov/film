const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.nav-menu');
const menuCloseButton = document.querySelector('.menu-close');

menuButton.addEventListener('click', () => {
  menu.classList.add('active');
  menuCloseButton.classList.add('active');
});

menuCloseButton.addEventListener('click', () => {
  menu.classList.remove('active');
  menuCloseButton.classList.remove('active');
});