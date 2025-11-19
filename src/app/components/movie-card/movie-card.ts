import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { TransformLenghtPipe } from '../../pipes/transform-lenght-pipe';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-movie-card',
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    TransformLenghtPipe,
    RouterLink,
  ],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.scss',
})
export class MovieCard {
  @Input() movie: any;
  @Output() favoritesIds: any = new EventEmitter();
  @Output() watchIds: any = new EventEmitter();

  addToFavorite(id: string) {
    this.favoritesIds.emit(id);
  }
  addToWatchList(id: string) {
    this.watchIds.emit(id);
  }

  isVisibleInfo: boolean = false;
}
