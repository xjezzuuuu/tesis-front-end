import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../../../core/services/posts.service';

@Component({
  selector: 'app-ancient-pets-carousel',
  templateUrl: './ancient-pets-carousel.component.html',
  styles: [],
})
export class AncientPetsCarouselComponent implements OnInit, OnChanges {
  @Input('id') id!: number;
  ancientPets: any

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
    slidesToShow: 2,
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

  constructor(private _route: ActivatedRoute, private _postService: PostsService, private _router: Router) {}

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    
    if (changes) {
      this._postService.getAllExcept(this.id).subscribe((posts) => {
        this.ancientPets = posts;
      } );
    }
  }
}
