$(document).ready(function() {
    var $window = $(window);

    function menuHover() {
        var windowsize = $window.width();
        if (windowsize > 991) {
            $('ul.nav li.dropdown').hover(function() {
              $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
          }, function() {
              $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
          });
        } else {};
    }
    menuHover();
    $(window).resize(menuHover);
});