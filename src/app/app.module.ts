import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { CoreModule } from '@app/core/core.module';
import { HomeModule } from './modules/home/home.module';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './mocules/auth/pages/login/login.component';
import { RegisterComponent } from './mocules/auth/pages/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HomeModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
