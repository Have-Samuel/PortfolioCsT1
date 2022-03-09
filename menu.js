// mobile-menu
const closeIcon = document.querySelector('.close-btn');

const menuIcon = document.querySelector('.ham-btn');

const navLinks = document.querySelector('.container');

menuIcon.addEventListener('click', () => {
  navLinks.classList.add('change');
});

closeIcon.addEventListener('click', () => {
  navLinks.classList.remove('change');
});

const listItems = document.querySelectorAll('.nav-mobile');

listItems.forEach((element) => {
  element.addEventListener('click', () => {
    navLinks.classList.remove('change');
  });
});
