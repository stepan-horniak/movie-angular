import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-header',
  imports: [MatBadgeModule, MatIconModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnChanges {
  @Input() addFavoriteId: any;
  @Input() addWatchId: any;
  @Output() passFavoriteListIds: any = new EventEmitter();
  @Output() passWatchListIds: any = new EventEmitter();

  watchListIds: string[] = [];
  favoriteListIds: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['addFavoriteId'] && this.addFavoriteId !== '') {
      this.favoriteListIds.push(this.addFavoriteId);
    }

    if (changes['addWatchId'] && this.addWatchId !== '') {
      this.watchListIds.push(this.addWatchId);
    }
  }

  //========================
  favoriteListOpen() {
    this.passFavoriteListIds.emit(this.favoriteListIds);
  }
  movieListOpen() {
    this.passWatchListIds.emit(this.watchListIds);
  }
}
