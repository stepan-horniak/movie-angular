import { Component, OnInit } from '@angular/core';
import { MovieCard } from '../../components/movie-card/movie-card';
import { Movie } from '../../models/movie.model';
import { MatIcon } from '@angular/material/icon';
import { Store } from '@ngrx/store';
import { selectFavoriteListMovies } from '../../store/selectors';
import { filter, map, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { time } from 'console';
import { deleteMovieInFavoriteList } from '../../store/actions';

@Component({
  selector: 'app-favorite-page',
  imports: [MovieCard, MatIcon, CommonModule],
  templateUrl: './favorite-page.html',
  styleUrl: './favorite-page.scss',
})
export class FavoritePage implements OnInit {
  movieList$!: Observable<Movie[]>;

  constructor(private store: Store) {}
  ngOnInit() {
    this.movieList$ = this.store.select(selectFavoriteListMovies);
  }
  deleteMovie(movieId: Number) {
    this.store.dispatch(deleteMovieInFavoriteList({ movieId: movieId }));
  }
}
