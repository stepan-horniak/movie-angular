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
export const selectWatchListCount = createSelector(
  selectMoviesState,
  (state) => state.watchListMovies.length
);
export const selectWatchListMovies = createSelector(
  selectMoviesState,
  (state) => state.watchListMovies
);

export const selectMovieToRoute = createSelector(
  selectMoviesState,
  (state) => state.movieElRouteToCard
);
export const selectMovieListNowPlaying = createSelector(
  selectMoviesState,
  (state) => state.nowPlaying
);
export const selectMovieListPopular = createSelector(selectMoviesState, (state) => state.popular);
export const selectMovieListTopRated = createSelector(selectMoviesState, (state) => state.topRated);
export const selectMovieListUpcoming = createSelector(selectMoviesState, (state) => state.upcoming);
