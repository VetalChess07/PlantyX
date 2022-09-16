let burger = document.querySelector('.burger');
let lineBurgerFirst = document.querySelector('.burger__line_first');
let lineBurgerLast = document.querySelector('.burger__line_last');
let menu = document.querySelector('.menu');

burger.addEventListener('click', function () {
   burger.classList.toggle('active')
   lineBurgerFirst.classList.toggle('active')
   lineBurgerLast.classList.toggle('active')
   menu.classList.toggle('active');
});




const swiper = new Swiper('.swiper', {
   // Optional parameters

   loop: true,



   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-prev',
      prevEl: '.swiper-button-next',
   },



});



