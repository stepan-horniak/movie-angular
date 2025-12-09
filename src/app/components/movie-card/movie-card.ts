import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { TransformLenghtPipe } from '../../pipes/transform-lenght-pipe';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MovieData } from '../../services/movie-data';
import { Movie } from '../../models/movie.model';
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
  constructor(private movieData: MovieData) {}

  @Input() movie!: Movie;

  isVisibleInfo: boolean = false;

  addToFavorite(movie: Movie) {
    this.movieData.setFavorite(movie);
  }
  addToWatchList(movie: Movie) {
    this.movieData.setWatchList(movie);
  }

  routeToMovie(movie: Movie) {
    return this.movieData.setMovieToRouteMovieCard(movie);
  }
}
