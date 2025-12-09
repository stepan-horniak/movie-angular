import { Component, OnInit } from '@angular/core';
import { MovieCard } from '../../components/movie-card/movie-card';
import { MovieData } from '../../services/movie-data';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-favorite-page',
  imports: [MovieCard],
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
}
