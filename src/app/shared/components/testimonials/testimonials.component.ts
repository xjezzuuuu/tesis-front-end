import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styles: [],
})
export class TestimonialsComponent implements OnInit {
  testimonials = [
    {
      photo:
        'https://themebeyond.com/pre/petco-prev/petco-live/img/images/testi_avatar01.png',
      testimonial:
        '“ Es súper buena idea que se cree una aplicación para adoptar mascotas, porque hará el proceso mucho más rápido para que los perritos, gatitos, u otros animalitos encuentren hogar ”',
      name: 'Barbara Salazar',
      position: 'Enfermera',
    },
    {
      photo:
        'https://themebeyond.com/pre/petco-prev/petco-live/img/images/testi_avatar02.png',
      testimonial:
        '“ Si, la aplicación web es un gran aporte. Ya que con el uso de las nuevas tecnologías y sus herramientas, aplicaciones de este tipo permite agilizar el conocimiento de aquellos que quieren adoptar animales callejeros, abandonados, entre otros. ”',
      name: 'Oscar Flores',
      position: 'Kinesiólogo',
    },
    {
      photo:
        'https://themebeyond.com/pre/petco-prev/petco-live/img/images/testi_avatar01.png',
      testimonial:
        '“ ...Esta aplicación sería muy útil, ya que puede ser utilizadas por todos, desde grupos animalistas que rescatan y dan en adopción animales, hasta personas que buscan animales extraviados. ”',
      name: 'Denise Kuhn',
      position: 'Veterinaria',
    },
    {
      photo:
        'https://themebeyond.com/pre/petco-prev/petco-live/img/images/testi_avatar02.png',
      testimonial:
        '“ Es una muy buena idea generar aplicaciones de búsqueda y adopción animal, ya que fortalece crea más conciencia en la tenencia responsable de animales ”',
      name: 'Roger Gaete',
      position: 'Prevencionista de riesgo',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  slideConfig = {
    dots: true,
    infinite: true,
    speed: 4000,
    autoplay: false,
    arrows: false,
    autoplaySpeed: 4000,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 1000,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          speed: 1000,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          speed: 1000,
        },
      },
    ],
  };
}
