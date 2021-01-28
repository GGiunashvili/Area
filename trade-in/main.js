
// $('.footer__col-one__title__txt').click( function() {
//     $(this).addClass('rotate');           
// } );

$(document).ready(function(){
    $(".footer__col-one__title__txt").click(function(){
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