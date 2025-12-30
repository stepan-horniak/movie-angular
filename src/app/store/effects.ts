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

  //   loadMovies$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(MoviesActions.loadMovies),
  //     // Дивимось у Store
  //     withLatestFrom(this.store.select(selectMoviesState)),
  //     // Фільтруємо: пускаємо запит далі тільки якщо масив порожній
  //     filter(([action, state]) => {
  //       const stateKey = categoryToStateKey[action.category];
  //       return state[stateKey].length === 0;
  //     }),
  //     // Якщо filter пропустив — робимо запит
  //     switchMap(([action]) =>
  //       this.movieService.getMovies(action.category).pipe(
  //         map(movies => MoviesActions.loadMoviesSuccess({ movies, category: action.category })),
  //         catchError(() => EMPTY)
  //       )
  //     )
  //   )
  // );
}
