import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Movie, MovieCategory } from '../models/movie.model';
import { selectMoviesByCategory } from '../store/selectors';
import { filter, map, Observable, take } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadMovies } from '../store/actions';

@Injectable({ providedIn: 'root' })
export class MoviesResolver implements Resolve<boolean> {
  constructor(private store: Store) {}

  resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
    const category = route.paramMap.get('category')!;

    this.store.dispatch(loadMovies({ category: category as MovieCategory }));

    return this.store.select(selectMoviesByCategory(category as MovieCategory)).pipe(
      filter((movies) => !!movies && movies.length > 0),
      take(1),
      map(() => true)
    );
  }
}
