import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';

import { PostsService } from '../../../../core/services/posts.service';

@Component({
  selector: 'app-view-pet',
  templateUrl: './view-pet.component.html',
  styles: [],
})
export class ViewPetComponent implements OnInit {
  title: string = 'Adoptar';
  image: string = "/assets/img/bg/breadcrumb_bg.jpg";
  id: number | undefined;
  post: any;
  posts: any;

  constructor(private _route: ActivatedRoute, private _postService: PostsService, private _router: Router) {}

  ngOnInit(): void {
    this._route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));	
      this.getPost(this.id);
    });
  }

  getPost(id: number) {
    this._postService.getPost(id).subscribe((post) => {
      if (post) {
        this.post = post;
        this.setTitle(post.title.slice(0, 40));
      } else {
        this._router.navigate(['/adoptions']);
      }
    });
  }

  setTitle(title: string) {
    this.title = title;
  }
}
