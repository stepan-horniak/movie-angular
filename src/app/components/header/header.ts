import { Component, OnChanges, OnInit } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectFavoriteListCount, selectFavoriteListMovies } from '../../store/selectors';
import { Observable } from 'rxjs';
import { Movie } from '../../models/movie.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  imports: [MatBadgeModule, MatIconModule, RouterLink, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {
  countFavorite$!: Observable<number>;
  constructor(private store: Store) {}

  ngOnInit() {
    this.countFavorite$ = this.store.select(selectFavoriteListCount);
  }
}
