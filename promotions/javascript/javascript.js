

 var swiper = new Swiper('.swiper-container', {

  slidesPerView: 1.3,
  centeredSlides: true,
  spaceBetween: 10,
  loop: true,
  speed: 400,


navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1.1,
centeredSlides: true,
  spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
centeredSlides: true,
  spaceBetween: 30,
    },
    1024: {
   
      slidesPerView: 3,
centeredSlides: true,
  spaceBetween: 30,
    },
  }

  
});