import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: [
  ]
})
export class ContactComponent implements OnInit {
  title = 'Contacto';
  image: string = "/assets/img/bg/breadcrumb_bg.jpg"
  
  constructor() { }

  ngOnInit(): void {
  }

}
