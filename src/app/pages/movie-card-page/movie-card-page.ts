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
    const idMovie = Number(this.route.snapshot.queryParams['id']);

    this.movieData.getMoviesAPi().subscribe((response) => {
      const movielistFromApi = response.results;

      // Знаходимо потрібний фільм
      const searchMovieEl = movielistFromApi.find((movie: any) => movie.id === idMovie);

      if (searchMovieEl) {
        this.movie = searchMovieEl;
        console.log('Знайдений фільм:', this.movie);
      }
    });
  }
  addToWatchList(id: string) {
    this.movieData.setWatchList(id);
  }
  addToFavorite(id: string) {
    this.movieData.setFavorite(id);
  }
}
