import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdoptsComponent } from './pages/adopts/adopts.component';

const routes: Routes = [
  {
    path: '',
    component: AdoptsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdoptsRoutingModule { }
