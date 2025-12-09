import { Component, OnChanges, OnInit } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MovieData } from '../../services/movie-data';
import { Observable } from 'rxjs';
import { Movie } from '../../models/movie.model';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-header',
  imports: [MatBadgeModule, MatIconModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {
  private favorites$!: Observable<Movie[]>;
  public favoriteCount: number = 0;

  private watches$!: Observable<Movie[]>;
  public watchCount: number = 0;

  constructor(private movieData: MovieData) {}

  ngOnInit() {
    this.favorites$ = this.movieData.getFavoriteList();
    this.favorites$.subscribe((data) => (this.favoriteCount = data.length));

    this.watches$ = this.movieData.getWatchList();
    this.watches$.subscribe((data) => (this.watchCount = data.length));
  }
}
