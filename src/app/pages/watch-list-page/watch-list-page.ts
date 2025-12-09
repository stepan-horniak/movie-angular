import { Component, OnInit } from '@angular/core';
import { MovieData } from '../../services/movie-data';
import { Movie } from '../../models/movie.model';
import { MovieCard } from '../../components/movie-card/movie-card';

@Component({
  selector: 'app-watch-list-page',
  imports: [MovieCard],
  templateUrl: './watch-list-page.html',
  styleUrl: './watch-list-page.scss',
})
export class WatchListPage implements OnInit {
  movieList: Movie[] = [];

  constructor(private movieData: MovieData) {}
  ngOnInit() {
    this.movieData.getWatchList().subscribe((movie) => {
      this.movieList = movie;
    });
  }
}
