import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdoptsRoutingModule } from '@adopts/adopts-routing.module';
import { AdoptsComponent } from '@adopts/pages/adopts/adopts.component';
import { SharedModule } from '../../shared/shared.module';
import { ViewPetComponent } from './pages/view-pet/view-pet.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { NgWizardConfig, NgWizardModule, THEME } from 'ng-wizard';
import { ReactiveFormsModule } from '@angular/forms';

const ngWizardConfig: NgWizardConfig = {
  theme: THEME.default
};

@NgModule({
  declarations: [
    AdoptsComponent,
    ViewPetComponent,
    CreatePostComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdoptsRoutingModule,
    SharedModule,
    NgWizardModule.forRoot(ngWizardConfig),
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AdoptsModule { }
