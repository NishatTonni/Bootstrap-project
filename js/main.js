$(document).ready(function(){

    // slider-active
    $('.slider-active').slick({
        infinite: true,
        arrows: false,
        autoplay: true,
        dots:false,
        slidesToShow: 1,
        slidesToScroll: 1
      });

    //   testmonial-active
    $('.testmonial-active').slick({
        infinite: true,
        arrows: false,
        dots:true,
        slidesToShow: 1,
        slidesToScroll: 1
      });

       // brand
    $('.brand-active').slick({
        infinite: true,
        arrows: false,
        autoplay: true,
        dots:false,
        slidesToShow: 5,
        slidesToScroll: 1
      });


    //counter

      $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    


    })