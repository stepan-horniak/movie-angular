import { Component } from '@angular/core';
import { MovieResponse } from '../../models/movie.model';
import { Observable } from 'rxjs';
import { MovieData } from '../../services/movie-data';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MovieCard } from '../../components/movie-card/movie-card';

@Component({
  selector: 'app-movie-list',
  imports: [AsyncPipe, CommonModule, MovieCard],
  standalone: true,
  templateUrl: './movie-list-page.html',
  styleUrl: './movie-list-page.scss',
})
export class MovieList {
  movies$!: Observable<MovieResponse>;
  moviespop$!: Observable<MovieResponse>;

  constructor(private movieData: MovieData) {}

  ngOnInit() {
    this.movies$ = this.movieData.getMoviesAPi('now_playing');
  }
}
