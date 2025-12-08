import { Component } from '@angular/core';
import { MovieResponse } from '../../models/movie.model';
import { Observable } from 'rxjs';
import { MovieData } from '../../services/movie-data';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MovieCard } from '../../components/movie-card/movie-card';

@Component({
  selector: 'app-upcoming-page',
  imports: [AsyncPipe, CommonModule, MovieCard],
  templateUrl: './upcoming-page.html',
  styleUrl: './upcoming-page.scss',
})
export class UpcomingPage {
  movies$!: Observable<MovieResponse>;

  constructor(private movieData: MovieData) {}

  ngOnInit() {
    this.movies$ = this.movieData.getMoviesAPi('upcoming');
  }
}
