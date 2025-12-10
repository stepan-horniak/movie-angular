import { Component, OnInit } from '@angular/core';
import { MovieCard } from '../../components/movie-card/movie-card';
import { MovieData } from '../../services/movie-data';
import { Movie } from '../../models/movie.model';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-favorite-page',
  imports: [MovieCard, MatIcon],
  templateUrl: './favorite-page.html',
  styleUrl: './favorite-page.scss',
})
export class FavoritePage implements OnInit {
  movieList: Movie[] = [];

  constructor(private movieData: MovieData) {}
  ngOnInit() {
    this.movieData.getFavoriteList().subscribe((movie) => {
      this.movieList = movie;
    });
  }
  deleteMovie(movie: Movie) {
    this.movieList = this.movieList.filter((m) => m.id !== movie.id);
    this.movieData.favoriteList = this.movieList;
    this.movieData.favoriteListSubject.next([...this.movieList]);
  }
}
