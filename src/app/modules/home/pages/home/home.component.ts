import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  get user() {
    return { ...this._authService._user };
  }

  sliderImages = [
    {
      img: 'https://themebeyond.com/pre/petco-prev/petco-live/img/slider/slider_bg01.jpg',
      title: 'Best Friend <span>with</span> Happy Time',
      description: 'Probando',
    },
    {
      img: 'https://themebeyond.com/pre/petco-prev/petco-live/img/slider/slider_bg02.jpg',
      title: 'Best Friend <span>with</span> Happy Time',
      description:
        'Human Shampoo on Dogs After six days of delirat, the jury found Hernandez guilty of first-degree murder',
    },
    {
      img: 'https://themebeyond.com/pre/petco-prev/petco-live/img/slider/s_slider_bg01.jpg',
      title: 'Best Friend <span>with</span> Happy Time',
      description:
        'Human Shampoo on Dogs After six days of delirat, the jury found Hernandez guilty of first-degree murder',
    },
    {
      img: 'https://themebeyond.com/pre/petco-prev/petco-live/img/slider/s_slider_bg02.jpg',
      title: 'Best Friend <span>with</span> Happy Time',
      description:
        'Human Shampoo on Dogs After six days of delirat, the jury found Hernandez guilty of first-degree murder',
    },
  ];
  constructor(private _authService: AuthService) {}

  ngOnInit(): void {
  }
}
