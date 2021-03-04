
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









///responsive footer////
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