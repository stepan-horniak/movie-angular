import { Component } from '@angular/core';
import { MovieResponse } from '../../models/movie.model';
import { Observable } from 'rxjs';
import { MovieData } from '../../services/movie.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MovieCard } from '../../components/movie-card/movie-card';
@Component({
  selector: 'app-popular-page',
  imports: [AsyncPipe, CommonModule, MovieCard],
  templateUrl: './popular-page.html',
  styleUrl: './popular-page.scss',
})
export class PopularPage {
  movies$!: Observable<MovieResponse>;

  constructor(private movieData: MovieData) {}

  ngOnInit() {
    this.movies$ = this.movieData.getMoviesAPi('popular');
  }
}
