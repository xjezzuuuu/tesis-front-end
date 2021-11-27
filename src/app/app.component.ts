import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'front-end';

  ngOnInit(){
    $(document).ready(() => {
      $.getScript('/assets/js/bootstrap.min.js')
      $.getScript('/assets/js/isotope.pkgd.min.js')
      $.getScript('/assets/js/imagesloaded.pkgd.min.js')
      $.getScript('/assets/js/jquery.magnific-popup.min.js')
      $.getScript('/assets/js/owl.carousel.min.js')
      $.getScript('/assets/js/jquery.odometer.min.js')
      $.getScript('/assets/js/jquery.nice-select.min.js')
      $.getScript('/assets/js/jquery-ui.min.js')
      $.getScript('/assets/js/jquery.appear.js')
      $.getScript('/assets/js/slick.min.js')
      $.getScript('/assets/js/wow.min.js')
      $.getScript('/assets/js/plugins.js')
      $.getScript('/assets/js/main.js')
    })
  }
}
