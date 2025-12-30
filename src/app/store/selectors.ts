import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MoviesState } from './state';
import { categoryToStateKey, MovieCategory } from '../models/movie.model';

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

export const selectMoviesByCategory = (category: MovieCategory) =>
  createSelector(selectMoviesState, (state) => {
    const stateKey = categoryToStateKey[category];
    return state[stateKey];
  });
