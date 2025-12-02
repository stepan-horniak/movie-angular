import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute } from '@angular/router';
import { MovieData } from '../../services/movie-data';
@Component({
  selector: 'app-movie-card-page',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './movie-card-page.html',
  styleUrl: './movie-card-page.scss',
})
export class MovieCardPage implements OnInit {
  public movie: any;

  constructor(private route: ActivatedRoute, private movieData: MovieData) {}

  ngOnInit() {
    const idMovie = this.route.snapshot.queryParams['id'];
    const movieList = this.movieData.getMovies();
    const searchMovieEl = movieList.find((movie) => movie.id === idMovie);
    searchMovieEl ? (this.movie = searchMovieEl) : null;
  }
  addToWatchList(id: string) {
    this.movieData.setWatchList(id);
  }
  addToFavorite(id: string) {
    this.movieData.setFavorite(id);
  }
}
