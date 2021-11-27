import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from '@core/core-routing.module';
import { FooterComponent } from '@core/components/layouts/footer/footer.component';
import { NavbarComponent } from '@core/components/layouts/header/navbar/navbar.component';
import { HeaderComponent } from '@core/components/layouts/header/header.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
