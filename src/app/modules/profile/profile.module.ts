import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { MyPostsComponent } from './pages/my-posts/my-posts.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    MyPostsComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule
  ]
})
export class ProfileModule { }
