import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'front-end';

  ngOnInit() {
    $(document).ready(() => {
      $.getScript('/assets/js/bootstrap.min.js');
      $.getScript('/assets/js/isotope.pkgd.min.js');
      $.getScript('/assets/js/imagesloaded.pkgd.min.js');
      $.getScript('/assets/js/jquery.magnific-popup.min.js');
      $.getScript('/assets/js/owl.carousel.min.js');
      $.getScript('/assets/js/jquery.odometer.min.js');
      $.getScript('/assets/js/jquery.nice-select.min.js');
      $.getScript('/assets/js/jquery-ui.min.js');
      $.getScript('/assets/js/jquery.appear.js');
      $.getScript('/assets/js/wow.min.js');
      $.getScript('/assets/js/plugins.js');
      //SubMenu Dropdown Toggle
      if ($('.menu-area li.menu-item-has-children ul').length) {
        $('.menu-area .navigation li.menu-item-has-children').append(
          '<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>'
        );
      }

      //Mobile Nav Hide Show
      if ($('.mobile-menu').length) {
        //Dropdown Button
        $('.mobile-menu li.menu-item-has-children .dropdown-btn').on(
          'click',
          function () {
            $(this).toggleClass('open');
            $(this).prev('ul').slideToggle(500);
          }
        );
        //Menu Toggle Btn
        $('.mobile-nav-toggler').on('click', function () {
          $('body').addClass('mobile-menu-visible');
        });

        //Menu Toggle Btn
        $('.menu-backdrop, .mobile-menu .close-btn, .menu-outer ul > li').on(
          'click',
          function () {
            $('body').removeClass('mobile-menu-visible');
          }
        );
      }
      if ($('.scroll-to-target').length) {
        $('.scroll-to-target').on('click', function () {
          var target = $(this).attr('data-target');
          // animate
          $('html, body').animate(
            {
              scrollTop: 0,
            },
            1000
          );
        });
      }

      $('.header-search > a').on('click', function () {
        $('.search-popup-wrap').slideToggle();
        return false;
      });

      $('.search-close').on('click', function () {
        $('.search-popup-wrap').slideUp(500);
      });
    });
  }
}
