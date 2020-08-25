//////////////////////////////////////////////// carousel not buutstrap //////////////////////////////////////////////////////////

$('.responsive').slick({
  dots: false,
  infinite: true,
  prevArrow: '.arrow_prev',
  nextArrow: '.arrow_next',
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



/////////////////////// arrow horizont centered ///////////////////////////////////
$(window).on('load resize', function () {
  changepos();
 });
 
 function changepos() {
   var toppos = ($('.slick-active').find("img").height()/2);
   $('.slick-arrow').css('top',toppos+'px');
 }
 
 $('.list').slick({
   dots: true,
   infinite: true,
   speed: 300,
   slidesToShow: 1,
   adaptiveHeight: true
 }).on('afterChange',function(event){
   var toppos = ($('.slick-active').find("img").height()/2);
   $('.slick-arrow').css('top',toppos+'px');
 }).trigger('afterChange');

 /////////////////////// arrow horizont centered end /////////////////////////////
 //////////////////////////////////////////////// carousel not buutstrap end ///////////////////////////////////////////////////////////////////////////////////////
