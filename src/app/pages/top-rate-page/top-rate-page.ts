import { Component } from '@angular/core';
import { Movie, MovieResponse } from '../../models/movie.model';
import { Observable, take } from 'rxjs';
import { MovieData } from '../../services/movie.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MovieCard } from '../../components/movie-card/movie-card';
import { Store } from '@ngrx/store';
import { loadMovies } from '../../store/actions';
import { selectMoviesByCategory } from '../../store/selectors';

@Component({
  selector: 'app-top-rate-page',
  imports: [AsyncPipe, CommonModule, MovieCard],
  templateUrl: './top-rate-page.html',
  styleUrl: './top-rate-page.scss',
})
export class TopRatePage {
  movies$!: Observable<Movie[]>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store
      .select(selectMoviesByCategory('top_rated'))
      .pipe(take(1))
      .subscribe((movies) => {
        if (movies && movies.length > 0) {
          this.movies$ = this.store.select(selectMoviesByCategory('top_rated'));
        } else {
          this.store.dispatch(loadMovies({ category: 'top_rated' }));
          this.movies$ = this.store.select(selectMoviesByCategory('top_rated'));
        }
      });
  }
}
