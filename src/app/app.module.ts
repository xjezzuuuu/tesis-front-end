import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { HotToastModule } from '@ngneat/hot-toast';

import { CoreModule } from '@app/core/core.module';
import { HomeModule } from './modules/home/home.module';
import { SharedModule } from './shared/shared.module';
import { FooterComponent } from './core/components/layouts/footer/footer.component';
import { HeaderComponent } from './core/components/layouts/header/header.component';
import { NavbarComponent } from './core/components/layouts/header/navbar/navbar.component';
import { AuthGuard } from './core/guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HomeModule,
    SharedModule,
    HotToastModule.forRoot()
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
