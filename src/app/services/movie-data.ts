import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Movie, MovieResponse } from '../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieData {
  keyApi: string = '990acf64959e089026c70ce56aa97124';
  tokenApi: string =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTBhY2Y2NDk1OWUwODkwMjZjNzBjZTU2YWE5NzEyNCIsIm5iZiI6MTc2NDc5MzIxOC41Nzc5OTk4LCJzdWIiOiI2OTMwOWI4MmJmMDgwZmNjNjZjM2RjMmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.1vDXf-l4gdHnv1IUtHReLNBkodNhsRhDCmajs4dss3g';
  baseUrl: string = 'https://api.themoviedb.org/3/movie';

  favoriteListSubject = new BehaviorSubject<Movie[]>([]);
  favoriteList: Movie[] = [];
  watchListSubject = new BehaviorSubject<Movie[]>([]);
  watchList: Movie[] = [];
  movieRouteToCard!: Movie;

  constructor(private http: HttpClient) {}

  getMoviesAPi(movieCategory: string): Observable<MovieResponse> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.tokenApi}`,
      Accept: 'application/json',
    });

    return this.http.get<MovieResponse>(`${this.baseUrl}/${movieCategory}`, {
      headers,
      params: {
        language: 'en-US',
        page: 1,
      },
    });
  }

  setFavorite(movie: Movie) {
    if (!this.favoriteList.find((m) => m.id === movie.id)) {
      this.favoriteList.push(movie);
      this.favoriteListSubject.next([...this.favoriteList]);
    }
  }
  getFavoriteList(): Observable<Movie[]> {
    return this.favoriteListSubject.asObservable();
  }

  setWatchList(movie: Movie) {
    if (!this.watchList.find((m) => m.id === movie.id)) {
      this.watchList.push(movie);
      this.watchListSubject.next([...this.watchList]);
    }
  }
  getWatchList() {
    return this.watchListSubject.asObservable();
  }

  setMovieToRouteMovieCard(movie: Movie) {
    this.movieRouteToCard = movie;
  }
  getMovieToRouteMovieCard() {
    return this.movieRouteToCard;
  }
}
