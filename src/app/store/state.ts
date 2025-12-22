import { Movie } from '../models/movie.model';

export interface MoviesState {
  favoriteListMovies: Movie[];
  watchListMovies: Movie[];
  movieElRouteToCard: Movie | null;
}
export const initialMoviesState: MoviesState = {
  favoriteListMovies: [],
  watchListMovies: [],
  movieElRouteToCard: null,
};
