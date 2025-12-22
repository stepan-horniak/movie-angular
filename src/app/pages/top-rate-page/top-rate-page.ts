import { Component } from '@angular/core';
import { MovieResponse } from '../../models/movie.model';
import { Observable } from 'rxjs';
import { MovieData } from '../../services/movie.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MovieCard } from '../../components/movie-card/movie-card';

@Component({
  selector: 'app-top-rate-page',
  imports: [AsyncPipe, CommonModule, MovieCard],
  templateUrl: './top-rate-page.html',
  styleUrl: './top-rate-page.scss',
})
export class TopRatePage {
  movies$!: Observable<MovieResponse>;

  constructor(private movieData: MovieData) {}

  ngOnInit() {
    this.movies$ = this.movieData.getMoviesAPi('top_rated');
  }
}
