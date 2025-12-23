import { createAction, props } from '@ngrx/store';
import { Movie } from '../models/movie.model';

export const setToFavoriteList = createAction(
  '[Movies] add to favorite list',
  props<{ movie: Movie }>()
);

export const setToWatchList = createAction('[Movies] add to watch list', props<{ movie: Movie }>());

export const deleteMovieInFavoriteList = createAction(
  '[Movies] delete Movie In favorite list',
  props<{ movieId: Number }>()
);

export const deleteMovieInWatchList = createAction(
  '[Movies] delete Movie In watch list',
  props<{ movieId: Number }>()
);

export const setMovieToRoute = createAction(
  '[Movies] set movie to route',
  props<{ movie: Movie }>()
);
