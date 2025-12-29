import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, mergeMap } from 'rxjs';
import { MovieData } from '../services/movie.service';
import * as MoviesActions from './actions';
import { of } from 'rxjs';
@Injectable()
export class MoviesEffects {
  private actions$ = inject(Actions);
  private movieData = inject(MovieData);

  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesActions.loadMovies),
      mergeMap(({ category }) =>
        this.movieData.getMoviesAPi(category).pipe(
          map((res) => MoviesActions.loadMoviesSuccess({ movies: res.results, category })),
          catchError((err) =>
            of(
              MoviesActions.loadMoviesFailure({
                error: err.message,
                category,
              })
            )
          )
        )
      )
    )
  );
}
