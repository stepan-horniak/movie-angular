import { Component, OnInit } from '@angular/core';
import { MovieData } from '../../services/movie.service';
import { Observable } from 'rxjs';
import { MovieResponse } from '../../models/movie.model';
import { MovieCard } from '../../components/movie-card/movie-card';
import { AsyncPipe, CommonModule } from '@angular/common';
@Component({
  selector: 'app-not-plaing-page',
  imports: [MovieCard, AsyncPipe, CommonModule],
  templateUrl: './now-plaing-page.html',
  styleUrl: './now-plaing-page.scss',
})
export class NowPlaingPage implements OnInit {
  movies$!: Observable<MovieResponse>;

  constructor(private movieData: MovieData) {}

  ngOnInit() {
    this.movies$ = this.movieData.getMoviesAPi('now_playing');
  }
}
