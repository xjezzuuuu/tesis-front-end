import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdoptsRoutingModule } from '@adopts/adopts-routing.module';
import { AdoptsComponent } from '@adopts/pages/adopts/adopts.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    AdoptsComponent
  ],
  imports: [
    CommonModule,
    AdoptsRoutingModule,
    SharedModule
  ]
})
export class AdoptsModule { }
