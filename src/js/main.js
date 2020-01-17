//= sources/jquery.js
//= sources/action.js
//= sources/bootstrap.js
//= sources/slick.js
//= sources/slick-activate.js
//= sources/jquery.magnific-popup.min.js

$(document).ready(function() {
    $('.popup-link').magnificPopup({
        type: 'image'
        // other options
    });
});

var textarea = $('#textarea');

textarea.blur(function(){
    tmpval = $(this).val();
    if(tmpval == '') {
        $(this).addClass('empty');
        $(this).removeClass('not-empty');
        $('.textarea-wrap').addClass('empty');
        $('.textarea-wrap').removeClass('not-empty');
    } else {
        $(this).addClass('not-empty');
        $(this).removeClass('empty');
        $('.textarea-wrap').addClass('not-empty');
        $('.textarea-wrap').removeClass('empty');
    }
});
textarea.focusin(function(){
    $('.textarea-wrap').addClass('not-empty');
    $('.textarea-wrap').removeClass('empty');
});
textarea.focusout(function(){

    $('.textarea-wrap').addClass('empty');
    $('.textarea-wrap').removeClass('not-empty');
});

