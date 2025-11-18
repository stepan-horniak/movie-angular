import { Routes } from '@angular/router';
import { MovieList } from './pages/movie-list-page/movie.list-page';
import { MovieCardPage } from './pages/movie-card-page/movie-card-page';
import { MovieGuard } from './guards/movie-card.guard';

export const routes: Routes = [
  { path: '', component: MovieList },
  { path: 'movieCard/:id', canActivate: [MovieGuard], component: MovieCardPage },
];
