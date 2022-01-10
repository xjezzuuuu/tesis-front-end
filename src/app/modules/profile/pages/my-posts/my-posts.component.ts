import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../../../core/services/posts.service';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styles: [
  ]
})
export class MyPostsComponent implements OnInit {
  title: string = "Mis Publicaciones";
  image: string = "/assets/img/bg/breadcrumb_bg.jpg"
  posts: any[] = [];

  get user() {
    return { ...this._authService._user };
  }

  constructor(private _authService: AuthService, private _postService: PostsService) { }

  ngOnInit(): void {
    
    
    this._postService.getPostByUserId(this.user.id!).subscribe(posts => {
      this.posts = posts;
    });
    console.log(this.posts);
  }

}
