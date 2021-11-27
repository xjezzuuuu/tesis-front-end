/*=============================================
	=    		Top Selling Active		     =
=============================================*/
$(".breed-services-active").owlCarousel({
    loop: true,
    margin: 30,
    items: 2,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 1000,
    navText: [
      '<img src="/assets/img/icon/arrow.png" />',
      '<img src="/assets/img/icon/arrow.png" />',
    ],
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
        center: false,
        nav: false,
      },
      575: {
        items: 1,
        center: false,
        nav: false,
      },
      768: {
        items: 2,
        center: false,
        nav: false,
      },
      992: {
        items: 2,
        center: false,
        nav: false,
      },
      1200: {
        items: 2,
      },
    },
  });

/*=============================================
	=    		Top Selling Active		     =
=============================================*/
  $(".breeder-active").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1000,
    nav: false,
    dots: false,
  });