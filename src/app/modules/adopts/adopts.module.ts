import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdoptsRoutingModule } from '@adopts/adopts-routing.module';
import { AdoptsComponent } from '@adopts/pages/adopts/adopts.component';


@NgModule({
  declarations: [
    AdoptsComponent
  ],
  imports: [
    CommonModule,
    AdoptsRoutingModule
  ]
})
export class AdoptsModule { }
