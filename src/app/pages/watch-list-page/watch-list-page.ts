import { Component, OnInit } from '@angular/core';
import { MovieData } from '../../services/movie.service';
import { Movie } from '../../models/movie.model';
import { MovieCard } from '../../components/movie-card/movie-card';
import { MatIcon } from '@angular/material/icon';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectWatchListMovies } from '../../store/selectors';
import { CommonModule } from '@angular/common';
import { deleteMovieInWatchList } from '../../store/actions';

@Component({
  selector: 'app-watch-list-page',
  imports: [MovieCard, MatIcon, CommonModule],
  templateUrl: './watch-list-page.html',
  styleUrl: './watch-list-page.scss',
})
export class WatchListPage implements OnInit {
  watchListMovies$!: Observable<Movie[]>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.watchListMovies$ = this.store.select(selectWatchListMovies);
  }
  deleteMovie(movieId: number) {
    this.store.dispatch(deleteMovieInWatchList({ movieId: movieId }));
  }
}
