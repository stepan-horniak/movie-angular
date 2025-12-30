import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { combineLatest, map, Observable, tap } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MovieCard } from '../../components/movie-card/movie-card';
import { Store } from '@ngrx/store';
import * as MoviesSelectors from '../../store/selectors';
import { loadMovies } from '../../store/actions';
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
    this.store.dispatch(loadMovies({ category: 'now_playing' }));
    this.store.dispatch(loadMovies({ category: 'popular' }));
    this.store.dispatch(loadMovies({ category: 'top_rated' }));
    this.store.dispatch(loadMovies({ category: 'upcoming' }));
    this.movies$ = combineLatest({
      nowPlaying: this.store.select(MoviesSelectors.selectMoviesByCategory('now_playing')),
      popular: this.store.select(MoviesSelectors.selectMoviesByCategory('popular')),
      topRated: this.store.select(MoviesSelectors.selectMoviesByCategory('top_rated')),
      upcoming: this.store.select(MoviesSelectors.selectMoviesByCategory('upcoming')),
    }).pipe(
      map((data) => [...data.nowPlaying, ...data.popular, ...data.topRated, ...data.upcoming])
    );
  }
}
