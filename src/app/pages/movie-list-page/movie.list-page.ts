import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { map, Observable } from 'rxjs';
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
  public go = false;
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(loadMovies({ category: 'now_playing' }));

    this.movies$ = this.store.select(MoviesSelectors.selectMovieListNowPlaying).pipe(
      map((movies) => {
        this.go = movies.length > 0;
        return movies;
      })
    );
  }
}
