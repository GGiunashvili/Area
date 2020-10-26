/////////facebook///
var fbButton = document.getElementById('fb-share-button');
var url = window.location.href;

fbButton.addEventListener('click', function() {
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + 'promo.extra.ge/helloween/treatdetailed.html',
        'facebook-share-dialog',
        'width=800,height=600'
    );
    return false;
});
///////////////////////