/*=============================================
	=             Adoption Active          =
=============================================*/
$(".adopt-active").slick({
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 1000,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="/assets/img/icon/arrow.png" /></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="/assets/img/icon/arrow.png" /></button>',
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          speed: 1000,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          speed: 1000,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          speed: 1000,
        },
      },
    ],
  });

/*=============================================
	=             Adoption Active          =
=============================================*/
$('.breeder-gallery-active').slick({
	dots: true,
	infinite: true,
	speed: 1000,
	autoplay: true,
	arrows: false,
	autoplaySpeed: 3000,
	slidesToShow: 1,
	slidesToScroll: 1,
	vertical: true,
	responsive: [
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
			}
		},
	]
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

/*=============================================
	=           Data Background             =
=============================================*/
$("[data-background]").each(function () {
  $(this).css(
    "background-image",
    "url(" + $(this).attr("data-background") + ")"
  );
});