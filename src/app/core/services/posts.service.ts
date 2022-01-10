import { Injectable } from '@angular/core';

import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private _apiService: ApiService) {}

  getAll() {
    return this._apiService.get('/posts/all');
  }

  getPost(id: number) {
    return this._apiService.get(`/posts/${id}/all`);
  }

  getPostByUserId(id: number) {
    return this._apiService.get(`/posts/all/user/${id}`);
  }

  getAllExcept(id: number) {
    return this._apiService.get(`/posts/all/${id}`);
  }

  create(post: any) {
    return this._apiService.post('/posts', post);
  }
  
}
