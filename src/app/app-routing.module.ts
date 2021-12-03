import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanLoad } from '@angular/router';

import { HomeComponent } from './modules/home/pages/home/home.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'about',
    loadChildren: () => import('./modules/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'adoptions',
    loadChildren: () => import('./modules/adopts/adopts.module').then((m) => m.AdoptsModule),
  },
  {
    path: 'contact',
    loadChildren: () => import('./modules/contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
