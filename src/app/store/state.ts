import { Movie } from '../models/movie.model';

export interface MoviesState {
  favoriteListMovies: Movie[];
  watchListMovies: Movie[];
  movieElRouteToCard: Movie | null;
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}
export const initialMoviesState: MoviesState = {
  favoriteListMovies: [],
  watchListMovies: [],
  movieElRouteToCard: null,
  nowPlaying: [],
  popular: [],
  topRated: [],
  upcoming: [],
};
