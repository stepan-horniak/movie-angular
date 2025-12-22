import { Component, OnInit } from '@angular/core';
import { MovieData } from '../../services/movie.service';
import { Movie } from '../../models/movie.model';
import { MovieCard } from '../../components/movie-card/movie-card';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-watch-list-page',
  imports: [MovieCard, MatIcon],
  templateUrl: './watch-list-page.html',
  styleUrl: './watch-list-page.scss',
})
export class WatchListPage implements OnInit {
  movieList: Movie[] = [];

  constructor(private movieData: MovieData) {}
  ngOnInit() {}
  deleteMovie(movie: Movie) {
    this.movieList = this.movieList.filter((m) => m.id !== movie.id);
    this.movieData.watchList = this.movieList;
    this.movieData.watchListSubject.next([...this.movieList]);
  }
}
