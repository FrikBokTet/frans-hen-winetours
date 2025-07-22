const hamburger = document.getElementsByClassName('.hamburger');
const subMenu = document.getElementsByClassName('.sub-menu');

 hamburger.addEventListener('click', () => {
  hamburger.classList.toggle("active");
  subMenu.classList.toggle("active");
});