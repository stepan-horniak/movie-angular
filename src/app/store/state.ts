import { Movie } from '../models/movie.model';

export interface MoviesState {
  favoriteListMovies: Movie[];
  watchListMovies: Movie[];
  movieElRouteToCard: Movie | null;
  now_playing: Movie[];
  popular: Movie[];
  top_rated: Movie[];
  upcoming: Movie[];
}
export const initialMoviesState: MoviesState = {
  favoriteListMovies: [],
  watchListMovies: [],
  movieElRouteToCard: null,
  now_playing: [],
  popular: [],
  top_rated: [],
  upcoming: [],
};
