import { Component, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';
import { Movie } from '../../models/movie.model';
import { MovieCard } from '../../components/movie-card/movie-card';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectMoviesByCategory } from '../../store/selectors';
import { loadMovies } from '../../store/actions';
@Component({
  selector: 'app-not-plaing-page',
  imports: [MovieCard, AsyncPipe, CommonModule],
  templateUrl: './now-plaing-page.html',
  styleUrl: './now-plaing-page.scss',
})
export class NowPlaingPage implements OnInit {
  movies$!: Observable<Movie[]>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store
      .select(selectMoviesByCategory('now_playing'))
      .pipe(take(1))
      .subscribe((movies) => {
        if (movies && movies.length > 0) {
          this.movies$ = this.store.select(selectMoviesByCategory('now_playing'));
        } else {
          this.store.dispatch(loadMovies({ category: 'now_playing' }));
          this.movies$ = this.store.select(selectMoviesByCategory('now_playing'));
        }
      });
  }
}
