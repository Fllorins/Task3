$('.slider-block').slick({
  arrows: false,
  dots: true,
  adaptiveHeight: true,

  // infinite: false,
  slidesToShow: 2,
  responsive: [
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
  slidesToScroll: 1,
  speed: 600,
  draggable: true,
  swipe: true,
});

// if ($(window).innerWidth() <= 850) {
//   $('.propertis__inner').slick({
//     arrows: false,
//     dots: true,
//     adaptiveHeight: true,

//     slidesToShow: 2,
//     slidesToScroll: 1,
//     speed: 600,
//     draggable: true,
//     swipe: true,
//   });
// } else{

// }
