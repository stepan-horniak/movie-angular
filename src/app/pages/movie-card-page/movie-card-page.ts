import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MovieData } from '../../services/movie.service';
import { Movie } from '../../models/movie.model';
@Component({
  selector: 'app-movie-card-page',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './movie-card-page.html',
  styleUrl: './movie-card-page.scss',
})
export class MovieCardPage implements OnInit {
  public movie!: Movie;

  constructor(private movieData: MovieData) {}

  ngOnInit() {}

  addToFavorite(movie: Movie) {}
  addToWatchList(movie: Movie) {}
}
