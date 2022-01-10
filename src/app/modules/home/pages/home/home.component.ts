import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';
import { PostsService } from '../../../../core/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  get user() {
    return { ...this._authService._user };
  }
  posts: any[] = [];

  sliderImages = [
    {
      img: 'https://themebeyond.com/pre/petco-prev/petco-live/img/slider/slider_bg02.jpg',
      title: 'El mejor <span>amigo</span> que puedes encontrar',
      description:
        'Caminar regularmente o jugar con mascotas puede contribuir beneficiosamente a la salud.',
    },
    {
      img: 'https://themebeyond.com/pre/petco-prev/petco-live/img/slider/s_slider_bg01.jpg',
      title: 'No son sólo <span>animales</span>, sino una parte importante de nuestras vidas',
      description:
        'Las mascotas nos entregan mayores oportunidades de socialización.',
    },
    {
      img: 'https://themebeyond.com/pre/petco-prev/petco-live/img/slider/s_slider_bg02.jpg',
      title: 'Porque damos la <span>vida</span> por ellos y ellos por nosotros',
      description:
        'Antes de adoptar una nueva mascota, asegúrese de que sea la adecuada para usted y su familia. Investigue un poco de antemano sobre las necesidades específicas del animal.',
    },
  ];
  constructor(private _authService: AuthService, private _postService: PostsService) {}

  ngOnInit(): void {
    this._postService.getAll().subscribe(posts => {
      this.posts = posts;
    });
  }
}
