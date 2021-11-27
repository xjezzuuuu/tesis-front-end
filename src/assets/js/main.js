(function ($) {
  "use strict";

  /*=============================================
	=    		 Preloader			      =
=============================================*/
  function preloader() {
    $("#preloader").delay(0).fadeOut();
  }

  $(window).on("load", function () {
    preloader();
    wowAnimation();
  });

  /*=============================================
	=    		Mobile Menu			      =
=============================================*/
  //SubMenu Dropdown Toggle
  if ($(".menu-area li.menu-item-has-children ul").length) {
    $(".menu-area .navigation li.menu-item-has-children").append(
      '<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>'
    );
  }

  //Mobile Nav Hide Show
  if ($(".mobile-menu").length) {
    //Dropdown Button
    $(".mobile-menu li.menu-item-has-children .dropdown-btn").on(
      "click",
      function () {
        $(this).toggleClass("open");
        $(this).prev("ul").slideToggle(500);
      }
    );
    //Menu Toggle Btn
    $(".mobile-nav-toggler").on("click", function () {
      $("body").addClass("mobile-menu-visible");
    });

    //Menu Toggle Btn
    $(".menu-backdrop, .mobile-menu .close-btn, .menu-outer ul > li").on(
      "click",
      function () {
        $("body").removeClass("mobile-menu-visible");
      }
    );
  }

  /*=============================================
	=     Menu sticky & Scroll to top      =
=============================================*/
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
      $("#sticky-header").removeClass("sticky-menu");
      $(".scroll-to-target").removeClass("open");
    } else {
      $("#sticky-header").addClass("sticky-menu");
      $(".scroll-to-target").addClass("open");
    }
  });

  /*=============================================
	=    		 Scroll Up  	         =
=============================================*/
  if ($(".scroll-to-target").length) {
    $(".scroll-to-target").on("click", function () {
      var target = $(this).attr("data-target");
      // animate
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        1000
      );
    }); 
  }

/*=============================================
	=            Header Search            =
=============================================*/
  $(".header-search > a").on("click", function () {
    $(".search-popup-wrap").slideToggle();
    return false;
  });

  $(".search-close").on("click", function () {
    $(".search-popup-wrap").slideUp(500);
  });

/*=============================================
	=    		Magnific Popup		      =
=============================================*/
  $(".popup-image").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  /* magnificPopup video view */
  $(".popup-video").magnificPopup({
    type: "iframe",
  });

/*=============================================
	=    		 Wow Active  	         =
=============================================*/
  function wowAnimation() {
    var wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: false,
      live: true,
    });
    wow.init();
  }
})(jQuery);
