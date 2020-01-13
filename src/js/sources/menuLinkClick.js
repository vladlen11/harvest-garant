$(document).ready(function() {
    var $window = $(window);

    function menuLinkClick() {
        var windowsize = $window.width();
        if (windowsize > 991) {
            $("a.dropdown-toggle").addClass("disabled");
        } else {
          $("a.dropdown-toggle").removeClass("disabled");
        };
    }
    menuLinkClick();
    $(window).resize(menuLinkClick);
});