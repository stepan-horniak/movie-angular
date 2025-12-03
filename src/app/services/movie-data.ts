import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie, MovieResponse } from '../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieData {
  keyApi: string = '990acf64959e089026c70ce56aa97124';
  tokenApi: string =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTBhY2Y2NDk1OWUwODkwMjZjNzBjZTU2YWE5NzEyNCIsIm5iZiI6MTc2NDc5MzIxOC41Nzc5OTk4LCJzdWIiOiI2OTMwOWI4MmJmMDgwZmNjNjZjM2RjMmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.1vDXf-l4gdHnv1IUtHReLNBkodNhsRhDCmajs4dss3g';
  baseUrl: string = 'https://api.themoviedb.org/3/movie';

  favoriteListId: Set<string> = new Set();
  watchListId: Set<string> = new Set();

  constructor(private http: HttpClient) {}

  getMovies() {
    return [1, 2];
  }
  getMoviesAPi(): Observable<MovieResponse> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.tokenApi}`,
      Accept: 'application/json',
    });

    return this.http.get<MovieResponse>(`${this.baseUrl}/now_playing`, {
      headers,
      params: {
        language: 'en-US',
        page: 1,
      },
    });
  }

  setFavorite(movieId: string) {
    this.favoriteListId.add(movieId);
  }
  getFavoriteListId() {
    return this.favoriteListId;
  }

  setWatchList(movieId: string) {
    this.watchListId.add(movieId);
  }
  getWatchListId() {
    return this.watchListId;
  }
}
