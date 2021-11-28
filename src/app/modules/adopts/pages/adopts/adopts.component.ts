import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adopts',
  templateUrl: './adopts.component.html',
  styles: [
  ]
})
export class AdoptsComponent implements OnInit {
  title: string = "Adopciones";
  image: string = "/assets/img/bg/breadcrumb_bg.jpg"

  carrousel = [
    {
      img: '/assets/img/images/adop_img01.png',
      birth: 2021,
      title: 'Golden Retriever',
      description: 'The Golden Retriever is a medium-large gun dog that was bred.',
      link: '/about'
    },
    {
      img: '/assets/img/images/adop_img01.png',
      birth: 2021,
      title: 'Golden Retriever',
      description: 'The Golden Retriever is a medium-large gun dog that was bred.',
      link: '/auth/login'
    },
    {
      img: '/assets/img/images/adop_img01.png',
      birth: 2021,
      title: 'Golden Retriever',
      description: 'The Golden Retriever is a medium-large gun dog that was bred.',
      link: '/about'
    },
    {
      img: '/assets/img/images/adop_img01.png',
      birth: 2021,
      title: 'Golden Retriever',
      description: 'The Golden Retriever is a medium-large gun dog that was bred.',
      link: '/about'
    },
    {
      img: '/assets/img/images/adop_img01.png',
      birth: 2021,
      title: 'Golden Retriever',
      description: 'The Golden Retriever is a medium-large gun dog that was bred.',
      link: '/about'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
