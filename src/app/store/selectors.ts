import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MoviesState } from './state';

export const selectMoviesState = createFeatureSelector<MoviesState>('movies');

export const selectFavoriteListMovies = createSelector(
  selectMoviesState,
  (state) => state.favoriteListMovies
);
export const selectFavoriteListCount = createSelector(
  selectMoviesState,
  (state) => state.favoriteListMovies.length
);
// favoriteListMovies: [],
// watchListMovies: [],
// movieElRouteToCard: null,
