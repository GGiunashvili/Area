
// $('.footer__col-one__title__txt').click( function() {
//     $(this).addClass('rotate');           
// } );

$(document).ready(function(){
    $(".icon-1").click(function(){
        $(this).toggleClass("rotate");
    });
});
$(document).ready(function(){
    $(".icon-2").click(function(){
        $(this).toggleClass("rotate");
    });
});
$(document).ready(function(){
    $(".icon-3").click(function(){
        $(this).toggleClass("rotate");
    });
});

$('.icon-1').click( function() {
    $('.icon-2').removeClass('rotate');
    $('.icon-3').removeClass('rotate'); 
                                               
} );
$('.icon-2').click( function() {
    $('.icon-1').removeClass('rotate');
    $('.icon-3').removeClass('rotate'); 
                                               
} );

$('.icon-3').click( function() {
    $('.icon-1').removeClass('rotate');
    $('.icon-2').removeClass('rotate'); 
                                               
} );









///extra native footer////
$(document).ready(function() {

    $(".toggle-accordion").on("click", function() {
      var accordionId = $(this).attr("accordion-id"),
        numPanelOpen = $(accordionId + ' .collapse.in').length;
      
      $(this).toggleClass("active");
  
      if (numPanelOpen == 0) {
        openAllPanels(accordionId);
      } else {
        closeAllPanels(accordionId);
      }
    })
  
    openAllPanels = function(aId) {
      console.log("setAllPanelOpen");
      $(aId + ' .panel-collapse:not(".in")').collapse('show');
    }
    closeAllPanels = function(aId) {
      console.log("setAllPanelclose");
      $(aId + ' .panel-collapse.in').collapse('hide');
    }
       
  });
  //////






  function openGiftBox() {
    window.open("https://extra.ge/catalog/sporti-da-mogzauroba/fitnesi-da-ioga/sportuli-tansatsmeli?type=2&current=1&prod=%7B%7D");
}
function openGiftBox2() {
  window.open("https://extra.ge/landing/savarjisho-aqsesuarebi?type=2&current=1&filterByDiscount=false");
}
function openGiftBox3() {
  window.open("https://extra.ge/landing/vitaminebi-da-sakvebi-danamatebi?type=2&current=1&filterByDiscount=false");
}
function openGiftBox4() {
  window.open("https://promo.extra.ge/fitness-blog/");
}