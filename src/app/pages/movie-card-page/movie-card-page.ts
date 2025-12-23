import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Movie } from '../../models/movie.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectMovieToRoute } from '../../store/selectors';
import { CommonModule } from '@angular/common';
import { setToFavoriteList, setToWatchList } from '../../store/actions';
@Component({
  selector: 'app-movie-card-page',
  imports: [MatIconModule, MatButtonModule, CommonModule],
  templateUrl: './movie-card-page.html',
  styleUrl: './movie-card-page.scss',
})
export class MovieCardPage implements OnInit {
  public movie$!: Observable<Movie | null>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.movie$ = this.store.select(selectMovieToRoute);
  }

  addToFavorite(movie: Movie) {
    this.store.dispatch(setToFavoriteList({ movie }));
  }
  addToWatchList(movie: Movie) {
    this.store.dispatch(setToWatchList({ movie }));
  }
}
