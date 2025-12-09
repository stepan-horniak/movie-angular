import { Component, OnDestroy, OnInit } from '@angular/core';
import { Movie, MovieResponse } from '../../models/movie.model';
import { Observable, Subscription } from 'rxjs';
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
export class MovieList implements OnInit, OnDestroy {
  movieList: Movie[] = [];
  private subscriptions: Subscription[] = [];
  constructor(private movieData: MovieData) {}

  ngOnInit() {
    const apiText = ['now_playing', 'popular', 'top_rated', 'upcoming'];
    for (const key of apiText) {
      const sub = this.movieData.getMoviesAPi(key).subscribe((data) => {
        this.movieList.push(...data.results);
      });

      this.subscriptions.push(sub);
    }
  }
  ngOnDestroy() {
    if (this.subscriptions.length) {
      this.subscriptions.forEach((s) => s.unsubscribe());
    }
  }
}
