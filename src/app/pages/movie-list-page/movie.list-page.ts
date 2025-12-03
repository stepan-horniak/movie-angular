import { Component, OnInit } from '@angular/core';
import { MovieCard } from '../../components/movie-card/movie-card';
import { CommonModule } from '@angular/common';
import { MovieData } from '../../services/movie-data';

@Component({
  selector: 'app-movie-list',
  imports: [MovieCard, CommonModule],
  templateUrl: './movie-list-page.html',
  styleUrl: './movie-list-page.scss',
})
export class MovieList implements OnInit {
  movies: any[] = [];
  constructor(private movieData: MovieData) {}
  ngOnInit() {
    this.movieData.getMoviesAPi().subscribe((movie) => {
      this.movies = movie.results;
    });
  }
}
