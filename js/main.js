$(document).ready(function(){

  $('#mobile-menu-active').meanmenu({
    meanScreenWidth: "991",
    meanMenuContainer: '.mobile-menu'
  });

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
        slidesToScroll: 1,

        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
             
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });


    //counter

      $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    //wow active
    new WOW().init();

    //scroll up
    $.scrollUp({
      scrollName: 'scrollUp', // Element ID
      topDistance: '300', // Distance from top before showing element (px)
      topSpeed: 300, // Speed back to top (ms)
      animation: 'fade', // Fade, slide, none
      animationInSpeed: 200, // Animation in speed (ms)
      animationOutSpeed: 200, // Animation out speed (ms)
      scrollText: '<i class="fa-solid fa-angle-up"></i>', // Text for element
      activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });
    //map
    function myMap() {
      var mapProp= {
        center:new google.maps.LatLng(51.508742,-0.120850),
        zoom:5,
      };
      var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
      }

    


    })