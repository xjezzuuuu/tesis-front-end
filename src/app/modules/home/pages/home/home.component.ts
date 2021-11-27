import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  sliderImages = [
    {
      img: 'https://themebeyond.com/pre/petco-prev/petco-live/img/slider/slider_bg01.jpg',
      title: 'Best Friend <span>with</span> Happy Time',
      description: 'Probando'
    },
    {
      img: 'https://themebeyond.com/pre/petco-prev/petco-live/img/slider/slider_bg02.jpg',
      title: 'Best Friend <span>with</span> Happy Time',
      description: 'Human Shampoo on Dogs After six days of delirat, the jury found Hernandez guilty of first-degree murder'
    },
    {
      img: 'https://themebeyond.com/pre/petco-prev/petco-live/img/slider/s_slider_bg01.jpg',
      title: 'Best Friend <span>with</span> Happy Time',
      description: 'Human Shampoo on Dogs After six days of delirat, the jury found Hernandez guilty of first-degree murder'
    },
    {
      img: 'https://themebeyond.com/pre/petco-prev/petco-live/img/slider/s_slider_bg02.jpg',
      title: 'Best Friend <span>with</span> Happy Time',
      description: 'Human Shampoo on Dogs After six days of delirat, the jury found Hernandez guilty of first-degree murder'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
