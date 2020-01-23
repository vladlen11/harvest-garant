$(document).ready(function () {


    var slickVarBonuses = {
        arrows: true,
        infinite: true,
        dots: false,
        slidesToShow: 1,
        adaptiveHeight: true,
        responsive: [{
            breakpoint: 2560,
            settings: {
                arrows: true,
                infinite: true,
                slidesToShow: 1,
            }
        }
        ]
    };
    $('.c_slider').slick(slickVarBonuses);

});

