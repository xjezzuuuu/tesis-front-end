import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent implements OnInit {
  actualYear: number = new Date().getFullYear();
  copyright: string = `${this.actualYear} Find Your Pets`;

  constructor() { }

  ngOnInit(): void {
  }

}
