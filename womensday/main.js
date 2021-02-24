
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

function tanamedrove1() {
    window.open("https://www.google.com/search?q=tanamedrove+simgerebi&oq=tanamedrove&aqs=chrome.0.0j69i57j0l8.1428j0j7&sourceid=chrome&ie=UTF-8");
}
function tanamedrove2() {
    window.open("https://www.google.com/search?sxsrf=ALeKk02LAmuayyQMWJqTqkVgHEqdCS4Y0Q%3A1614174354173&ei=klg2YMuECtGflwSDoaOABw&q=2222&oq=2222&gs_lcp=Cgdnd3Mtd2l6EAMyBAgAEBMyBAgAEBMyBAgAEBMyBAgAEBMyBAgAEBMyBAgAEBMyBAgAEBMyBAgAEBMyBAgAEBMyBAgAEBM6CAgAELADEMsBOgkIABCwAxAHEB46BwgAELADEB46CQgAELADEAgQHjoFCAAQxAI6BAgAEANQ1vACWJ71AmD69QJoA3AAeACAAZMBiAGaA5IBAzAuM5gBAKABAaoBB2d3cy13aXrIAQrAAQE&sclient=gws-wiz&ved=0ahUKEwjLlfGH1ILvAhXRz4UKHYPQCHAQ4dUDCA0&uact=5");
}

$(".m-navbar-div").hover(function() {
    $('.tooltipe-btn-first').removeClass('tooltipe-btn-first');
  }, function() {
    $('.flyout').addClass('hidden');
  });

  $(".banner-img-one").hover(function() {
    $('.tooltipe-btn-one').addClass('tooltipe-btn-first');
  }, function() {
    $('.flyout').addClass('hidden');
  });
  $(".extra").hover(function() {
    $('.tooltipe-btn-one').addClass('tooltipe-btn-first');
  }, function() {
    $('.flyout').addClass('hidden');
  });

