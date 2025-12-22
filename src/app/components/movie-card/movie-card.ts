import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { TransformLenghtPipe } from '../../pipes/transform-lenght-pipe';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MovieData } from '../../services/movie.service';
import { Movie } from '../../models/movie.model';
import { Store } from '@ngrx/store';
import { setToFavoriteList, setToWatchList } from '../../store/actions';
import { selectFavoriteListMovies } from '../../store/selectors';
@Component({
  selector: 'app-movie-card',
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    TransformLenghtPipe,
    RouterLink,
  ],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.scss',
})
export class MovieCard {
  constructor(private store: Store) {}
  @Input() movie!: Movie;

  isVisibleInfo: boolean = false;

  addToFavorite(movie: Movie) {
    this.store.dispatch(setToFavoriteList({ movie }));
  }
  addToWatchList(movie: Movie) {
    this.store.dispatch(setToWatchList({ movie }));
  }

  routeToMovie(movie: Movie) {}
}
