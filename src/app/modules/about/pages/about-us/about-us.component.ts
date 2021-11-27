import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styles: [
  ]
})
export class AboutUsComponent implements OnInit {
  title: string = "Nosotros";
  image: string = "/assets/img/bg/breadcrumb_bg.jpg"
  
  constructor() { }

  ngOnInit(): void {
  }

}
