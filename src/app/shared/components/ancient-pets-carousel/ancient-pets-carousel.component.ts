import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ancient-pets-carousel',
  templateUrl: './ancient-pets-carousel.component.html',
  styles: [],
})
export class AncientPetsCarouselComponent implements OnInit {
  @Input('imgs') ancientPets: any;

  slideConfig = {
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
  };

  constructor() {}

  ngOnInit(): void {}
}
