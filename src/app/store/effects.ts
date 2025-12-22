import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, of } from 'rxjs';
import { MovieData } from '../services/movie.service';
import * as MoviesActions from './actions';

@Injectable()
export class MoviesEffects {
  // loadMovies$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(MoviesActions.loadMovies),
  //     concatMap(() => {
  //       return this.movieData.getMoviesAPi('popular').pipe(
  //         map((movies) => MoviesActions.loadMoviesSuccess({ movies: movies.results })),
  //         catchError((err) =>
  //           of(
  //             MoviesActions.loadMoviesFailure({
  //               error: err.message,
  //             })
  //           )
  //         )
  //       );
  //     })
  //   )
  // );
  // constructor(private movieData: MovieData, private actions$: Actions) {}
}
