import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdoptsComponent } from './pages/adopts/adopts.component';
import { ViewPetComponent } from './pages/view-pet/view-pet.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { AuthGuard } from '../../core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AdoptsComponent
  },
  {
    path: 'create',
    component: CreatePostComponent,
    canActivate: [AuthGuard]
  },
  {
    path: ':id',
    component: ViewPetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdoptsRoutingModule { }
