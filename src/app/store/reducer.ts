import { createReducer, on } from '@ngrx/store';
import { initialMoviesState } from './state';
import * as MoviesActions from './actions';
export const moviesReducer = createReducer(
  initialMoviesState,

  on(MoviesActions.setToFavoriteList, (state, { movie }) => ({
    ...state,
    favoriteListMovies: state.favoriteListMovies.some((el) => el.id === movie.id)
      ? state.favoriteListMovies
      : [...state.favoriteListMovies, movie],
  })),
  on(MoviesActions.setToWatchList, (state, { movie }) => ({
    ...state,
    watchListMovies: state.watchListMovies.some((el) => el.id === movie.id)
      ? state.watchListMovies
      : [...state.watchListMovies, movie],
  })),
  on(MoviesActions.deleteMovieInFavoriteList, (state, { movieId }) => ({
    ...state,
    favoriteListMovies: state.favoriteListMovies.filter((el) => el.id !== movieId),
  })),
  on(MoviesActions.deleteMovieInWatchList, (state, { movieId }) => ({
    ...state,
    watchListMovies: state.watchListMovies.filter((el) => el.id !== movieId),
  })),

  on(MoviesActions.setMovieToRoute, (state, { movie }) => ({
    ...state,
    movieElRouteToCard: movie,
  })),
  on(MoviesActions.loadMoviesSuccess, (state, { movies, category }) => ({
    ...state,
    [category]: movies,
  }))
);
