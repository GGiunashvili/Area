var swiper = new Swiper('.swiper-container', {

    slidesPerView: 4,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 4000,
    },
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
          slidesPerView: 4,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      }
    
      
    });