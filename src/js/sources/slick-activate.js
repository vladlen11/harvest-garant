$(document).ready(function() {


  var slickVarBonuses = {
    arrows: true,
    infinite: true,
    dots: true,
    slidesToShow: 1,
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

  runSlickForever = function() {
    $('.c_slider').slick(slickVarBonuses);
  };

  calcSlides = function() {
    $('.c_slider__counter').remove();
    var totalSlides   = $('.slick-dots li').length,
    indexCurrentSlide = $('.slick-dots li.slick-active').index() + 1;
    $('.c_slider').append("<div class='c_slider__counter'>0<span id='slider-current'>" + indexCurrentSlide + "</span>/0<span id='totalSlides'>" + totalSlides + "</span></div>");
  };
  runSlickForever();
  calcSlides();
  $("body").click(calcSlides);
  $("body").mousemove(calcSlides);
  $(".c_slider").on("tap", calcSlides);
  $(".c_slider").on("swipe", calcSlides);

});

