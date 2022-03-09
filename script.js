// mobile-menu
const closeIcon = document.querySelector('.btn-x');

const menuIcon = document.querySelector('.ham-btn');

const navLinks = document.querySelector('.container');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('change');
  console.log('Hello');
});

// const icons = document.querySelector('.toplogo1');
// icons.addEventListener('click', () => {

closeIcon.addEventListener('click', () => {
  navLinks.classList.remove('change');
});

const listItems = document.querySelectorAll('.nav-mobile');

listItems.forEach((element) => {
  element.addEventListener('click', () => {
    navLinks.classList.remove('change');
  });
});
