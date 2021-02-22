
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



function openNewTab() {
    window.open("https://promo.extra.ge/trade-in/'");
}
function openGiftBox() {
    window.open("https://extra.ge/catalog/sasachuqre-baratebi?fbclid=IwAR1RI0vXkB7d_lgUf76PCY-0MgrhB1TakZDYXYjtIGmdcxBxHQ8PxWoy62k");
}
