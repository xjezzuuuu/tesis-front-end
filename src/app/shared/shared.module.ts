import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { SliderComponent } from './components/slider/slider.component';
import { AncientPetsCarouselComponent } from './components/ancient-pets-carousel/ancient-pets-carousel.component';



@NgModule({
  declarations: [
    BreadcrumbComponent,
    SliderComponent,
    AncientPetsCarouselComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SlickCarouselModule
  ],
  exports: [
    BreadcrumbComponent,
    SliderComponent,
    AncientPetsCarouselComponent
  ]
})
export class SharedModule { }
