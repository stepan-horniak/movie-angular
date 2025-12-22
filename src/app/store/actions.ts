import { createAction, props } from '@ngrx/store';
import { Movie } from '../models/movie.model';

export const setToFavoriteList = createAction(
  '[Movies] add to favorite list',
  props<{ movie: Movie }>()
);

export const setToWatchList = createAction('[Movies] add to watch list', props<{ movie: Movie }>());

// export const setMovieElRouteToCard = createAction(
//   '[Movies] addMovieElRouteToCard',
//   props<{ movie: Movie[] }>()
// );
