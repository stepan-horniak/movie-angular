import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { forkJoin, map, Observable, Subscription } from 'rxjs';
import { MovieData } from '../../services/movie.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MovieCard } from '../../components/movie-card/movie-card';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-movie-list',
  imports: [AsyncPipe, CommonModule, MovieCard],
  standalone: true,
  templateUrl: './movie-list-page.html',
  styleUrl: './movie-list-page.scss',
})
export class MovieList implements OnInit {
  movies$!: Observable<Movie[]>;

  constructor(private store: Store) {}

  ngOnInit() {
    const apiText = ['now_playing', 'popular', 'top_rated', 'upcoming'];

    // const requests = apiText.map((key) => this.movieData.getMoviesAPi(key));

    // this.movies$ = forkJoin(requests).pipe(
    //   map((resArr) => resArr.flatMap((r) => r.results)) // об’єднати всі results в один масив
    // );
  }
}
