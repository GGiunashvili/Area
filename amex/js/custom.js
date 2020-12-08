$('.bog').click( function() {
    $('.tbc-clps').removeClass('show');
} );
$('.tbc').click( function() {
    $('.bog-clps').removeClass('show');
} );

$('.arrow-full-button-1').click( function() {
    $('.dropdown-icon-footer-1').addClass('rotate');
} );
$('.arrow-full-button-2').click( function() {
    $('.dropdown-icon-footer-2').addClass('rotate');       
} );
$('.arrow-full-button-3').click( function() {
    $('.dropdown-icon-footer-3').addClass('rotate');           
} );

///////////bog & tbc dropdown arrow/////////
$(document).ready(function(){
    $(".bog").click(function(){
        $(".bog-native-arrow").toggleClass("main");
    });
});
$(document).ready(function(){
    $(".tbc").click(function(){
        $(".tbc-native-arrow").toggleClass("main");
    });
});

$('.bog').click( function() {
    $('.tbc-native-arrow').removeClass('main');
} );
$('.tbc').click( function() {
    $('.bog-native-arrow').removeClass('main');
} );
////////////end/////

//////arrow rotate///////
$(document).ready(function(){
    $(".arrow-full-button-1").click(function(){
        $(".dropdown-icon-footer-1").toggleClass("main");
    });
});
$(document).ready(function(){
    $(".arrow-full-button-2").click(function(){
        $(".dropdown-icon-footer-2").toggleClass("main");
    });
});
$(document).ready(function(){
    $(".arrow-full-button-3").click(function(){
        $(".dropdown-icon-footer-3").toggleClass("main");
    });
});
$(document).ready(function(){
    $(".arrow-full-button-4").click(function(){
        $(".dropdown-icon-footer-4").toggleClass("main");
    });
});
$(document).ready(function(){
    $(".arrow-full-button-5").click(function(){
        $(".dropdown-icon-footer-5").toggleClass("main");
    });
});
$(document).ready(function(){
    $(".arrow-full-button-6").click(function(){
        $(".dropdown-icon-footer-6").toggleClass("main");
    });
});
/////////////////////////


$('.arrow-full-button-1').click( function() {
    $('.dropdown-icon-footer-2').removeClass('main');
    $('.dropdown-icon-footer-3').removeClass('main');  
    $('.dropdown-icon-footer-4').removeClass('main');  
    $('.dropdown-icon-footer-5').removeClass('main');        
    $('.dropdown-icon-footer-6').removeClass('main');                         
} );

$('.arrow-full-button-2').click( function() {
    $('.dropdown-icon-footer-1').removeClass('main');
    $('.dropdown-icon-footer-3').removeClass('main');
    $('.dropdown-icon-footer-4').removeClass('main');   
    $('.dropdown-icon-footer-5').removeClass('main');    
    $('.dropdown-icon-footer-6').removeClass('main');                         
} );

$('.arrow-full-button-3').click( function() {
    $('.dropdown-icon-footer-1').removeClass('main');
    $('.dropdown-icon-footer-2').removeClass('main'); 
    $('.dropdown-icon-footer-4').removeClass('main');   
    $('.dropdown-icon-footer-5').removeClass('main');    
    $('.dropdown-icon-footer-6').removeClass('main');                                                
} );
$('.arrow-full-button-4').click( function() {
    $('.dropdown-icon-footer-1').removeClass('main');
    $('.dropdown-icon-footer-2').removeClass('main'); 
    $('.dropdown-icon-footer-3').removeClass('main');       
    $('.dropdown-icon-footer-5').removeClass('main');   
    $('.dropdown-icon-footer-6').removeClass('main');                                                
} );
$('.arrow-full-button-5').click( function() {
    $('.dropdown-icon-footer-1').removeClass('main');
    $('.dropdown-icon-footer-2').removeClass('main'); 
    $('.dropdown-icon-footer-3').removeClass('main');   
    $('.dropdown-icon-footer-4').removeClass('main');       
    $('.dropdown-icon-footer-6').removeClass('main');                                                 
} );

$('.arrow-full-button-6').click( function() {
    $('.dropdown-icon-footer-1').removeClass('main');
    $('.dropdown-icon-footer-2').removeClass('main'); 
    $('.dropdown-icon-footer-3').removeClass('main');   
    $('.dropdown-icon-footer-4').removeClass('main');        
    $('.dropdown-icon-footer-5').removeClass('main');                         
} );
    

$(document).ready(function(){
    $(".for-window-change").css('height',$(window).height());
});