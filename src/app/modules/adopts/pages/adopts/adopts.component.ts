import { Component, OnInit } from '@angular/core';

import { PostsService } from '../../../../core/services/posts.service';

@Component({
  selector: 'app-adopts',
  templateUrl: './adopts.component.html',
  styles: [
  ]
})
export class AdoptsComponent implements OnInit {
  title: string = "Adopciones";
  image: string = "/assets/img/bg/breadcrumb_bg.jpg"
  posts: any[] = [];

  constructor(private _postService: PostsService) { }

  ngOnInit(): void {
    this._postService.getAll().subscribe(posts => {
      console.log(posts);
      
      this.posts = posts;
    });
  }

}
