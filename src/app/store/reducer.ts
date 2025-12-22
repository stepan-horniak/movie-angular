import { createReducer, on } from '@ngrx/store';
import { initialMoviesState } from './state';
import * as MoviesActions from './actions';
import { selectMoviesState } from './selectors';
export const moviesReducer = createReducer(
  initialMoviesState,

  on(MoviesActions.setToFavoriteList, (state, { movie }) => ({
    ...state,
    favoriteListMovies: state.favoriteListMovies.includes(movie)
      ? state.favoriteListMovies
      : [...state.favoriteListMovies, movie],
  })),
  on(MoviesActions.setToWatchList, (state, { movie }) => ({
    ...state,
    watchListMovies: state.watchListMovies.includes(movie)
      ? state.watchListMovies
      : [...state.watchListMovies, movie],
  }))

  // on(MoviesActions.setMovieElRouteToCard, (state, { movie }) => ({
  //     ...state,
  //      movieElRouteToCard: movie
  // }))
);
