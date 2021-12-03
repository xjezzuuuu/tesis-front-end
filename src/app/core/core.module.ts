import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

import { CoreRoutingModule } from '@core/core-routing.module';
import { AuthInterceptor } from './interceptors/auth.interceptor';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ]
})
export class CoreModule { }
