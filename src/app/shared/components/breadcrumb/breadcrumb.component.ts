import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styles: [
  ]
})
export class BreadcrumbComponent implements OnInit {
  @Input()title!: string;
  @Input()image!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
