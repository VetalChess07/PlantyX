

var galleryTop = new Swiper('.gallery-top', {
   spaceBetween: 10,
   navigation: {
      nextEl: '.swiper-shop__js-prev',
      prevEl: '.swiper-shop__js-next',


   },
   loop: true,
   loopedSlides: 4
});
var galleryThumbs = new Swiper('.gallery-thumbs', {
   spaceBetween: 44,
   centeredSlides: true,
   slidesPerView: 'auto',
   touchRatio: 0.2,
   slideToClickedSlide: true,
   loop: true,
   loopedSlides: 4
});
galleryTop.controller.control = galleryThumbs;
galleryThumbs.controller.control = galleryTop;