const btnToggle = document.querySelector('.main-nav__toggle');
const mobileMenu = document.querySelector('.mobile-menu');

btnToggle.addEventListener('click', function () {
  btnToggle.classList.toggle('open');
  mobileMenu.classList.toggle('fade-in');
  mobileMenu.classList.toggle('fade-out');
});
