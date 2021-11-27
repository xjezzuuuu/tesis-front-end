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

  constructor() { }

  ngOnInit(): void {
  }

}
