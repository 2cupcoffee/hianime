//Banner slider

$(document).ready(function () {

    $(".banner-slider").owlCarousel({
      loop: true,
      nav: true,
      pullhDrag: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
        },
      },
    })

});

$(document).ready(function () {
  $(".trending-anime-container").owlCarousel({
    responsiveClass: true,
    loop: false,
    nav: true,
    navContainer: ".tr-sliders",
    autoWidth: pageYOffset,
    responsive: {
      0: {
        items: 1,
      },
      300: {
        items: 2,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 5,
      },
      1200: {
        items: 6,
      },
      1400: {
        items: 7,
      },
      1600: {
        items: 8,
      },
    },
  });
});
