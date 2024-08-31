
$(document).ready(function(){
    $('.featured-slider-wrap').slick({
        slidesToShow: 8,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 1500,
    });



    $('.combo-slider-wrapper').slick({
        slidesToShow: 6,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 1500,
    });

    // Hero slider

    $('.hero-slider-wrapper').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true,
        autoplay:true,
        autoplaySpeed: 1500,
      });



  });