import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-header',
  imports: [MatBadgeModule, MatIconModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnChanges {
  @Input() addFavoriteId: any;
  @Input() addWatchId: any;

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
}
