import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styles: [],
})
export class SliderComponent implements OnInit {
  @Input('imgs') sliders:any;

  slideConfig = {
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // slickInit(e: any) {
  //   console.log('init');
  // }

  // breakpoint(e: any) {
  //   console.log('breakpoint');
  // }

  // afterChange(e: any) {
  //   console.log('afterChange');
  // }

  // beforeChange(e: any) {
  //   console.log('beforeChange');
  // }

  constructor() {}

  ngOnInit(): void {}
}
