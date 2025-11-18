import { Component, Output, EventEmitter } from '@angular/core';
import { MovieCard } from '../../components/movie-card/movie-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-list',
  imports: [MovieCard, CommonModule],
  templateUrl: './movie-list-page.html',
  styleUrl: './movie-list-page.scss',
})
export class MovieList {
  batman = [
    {
      id: '96895',
      title: 'Batman',
      year: '1989',
      poster:
        'https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_.jpg',
      description: 'Темний лицар Готема вперше протистоїть Джокеру, який сіє хаос у місті.',
    },
    {
      id: 'tt0468569',
      title: 'The Dark Knight',
      year: '2008',
      poster:
        'https://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
      description:
        'Бетмен стикається з геніальним злочинцем Джокером, який перевіряє межі справедливості.',
    },
    {
      id: 'tt2975590',
      title: 'Batman v Superman: Dawn of Justice Batman v Superman: Dawn of Justice',
      year: '2016',
      poster:
        'https://ia.media-imdb.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
      description:
        'Двоє супергероїв — Бетмен і Супермен — вступають у конфлікт, що може зруйнувати світ.',
    },
    {
      id: 'tt1345836',
      title: 'The Dark Knight Rises',
      year: '2012',
      poster:
        'https://ia.media-imdb.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
      description:
        'Через вісім років після падіння Джокера Бетмен повертається, щоб протистояти терористу Бейну.',
    },

    {
      id: 'tt4116284',
      title: 'The LEGO Batman Movie',
      year: '2017',
      poster:
        'https://ia.media-imdb.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
      description:
        'Гумористичний мультфільм про самозакоханого LEGO-Бетмена, який вчиться працювати в команді.',
    },

    {
      id: 'tt0118688',
      title: 'Batman & Robin',
      year: '1997',
      poster:
        'https://ia.media-imdb.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_UX182_CR0,0,182,268_AL_.jpg',
      description:
        'Бетмен і Робін борються проти Містера Фріза та Отруйної Айві, які загрожують заморозити Готем.',
    },
    {
      id: 'tt0103776',
      title: 'Batman Returns',
      year: '1992',
      poster:
        'https://ia.media-imdb.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
      description:
        'Бетмен протистоїть Пінгвіну та загадковій Жінці-Кішці, які об’єднуються проти нього.',
    },
  ];
}
