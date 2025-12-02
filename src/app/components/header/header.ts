import { Component, OnInit } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MovieData } from '../../services/movie-data';
@Component({
  selector: 'app-header',
  imports: [MatBadgeModule, MatIconModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {
  public favoriteListLength: number = 0;

  constructor(private movieData: MovieData) {}

  ngOnInit() {
    const favoriteListLength = this.movieData.getFavoriteListIdLength();
  }
  showCount() {
    console.log(this.favoriteListLength);
  }
}
