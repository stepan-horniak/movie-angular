import { Routes } from '@angular/router';
import { MovieList } from './pages/movie-list-page/movie.list-page';
import { MovieCardPage } from './pages/movie-card-page/movie-card-page';
import { MovieGuard } from './guards/movie-card.guard';
import { NowPlaingPage } from './pages/now-plaing-page/now-plaing-page';
import { PopularPage } from './pages/popular-page/popular-page';
import { TopRatePage } from './pages/top-rate-page/top-rate-page';
import { UpcomingPage } from './pages/upcoming-page/upcoming-page';
import { FavoritePage } from './pages/favorite-page/favorite-page';
import { WatchListPage } from './pages/watch-list-page/watch-list-page';

export const routes: Routes = [
  { path: '', component: MovieList },
  {
    path: 'favorite',
    component: FavoritePage,
    loadComponent: () => import('./pages/favorite-page/favorite-page').then((m) => m.FavoritePage),
  },
  { path: 'watchList', component: WatchListPage },
  { path: 'movieList', component: MovieList },
  { path: 'movieCard', canActivate: [MovieGuard], component: MovieCardPage },
  { path: 'nowPlaing', component: NowPlaingPage },
  { path: 'popular', component: PopularPage },
  { path: 'topRate', component: TopRatePage },
  { path: 'upcoming', component: UpcomingPage },
];
