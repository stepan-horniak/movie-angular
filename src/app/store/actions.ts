import { createAction, props } from '@ngrx/store';
import { Movie, MovieCategory } from '../models/movie.model';

export const setToFavoriteList = createAction(
  '[Movies] add to favorite list',
  props<{ movie: Movie }>()
);

export const setToWatchList = createAction('[Movies] add to watch list', props<{ movie: Movie }>());

export const deleteMovieInFavoriteList = createAction(
  '[Movies] delete Movie In favorite list',
  props<{ movieId: number }>()
);

export const deleteMovieInWatchList = createAction(
  '[Movies] delete Movie In watch list',
  props<{ movieId: number }>()
);

export const setMovieToRoute = createAction(
  '[Movies] set movie to route',
  props<{ movie: Movie }>()
);

export const loadMovies = createAction(
  '[Movies] load movies',
  props<{ category: MovieCategory }>()
);
export const loadMoviesSuccess = createAction(
  '[Movies] load movies success',
  props<{ movies: Movie[]; category: MovieCategory }>()
);
export const loadMoviesFailure = createAction(
  '[Movies] load movies failure',
  props<{ error: string; category: MovieCategory }>()
);
