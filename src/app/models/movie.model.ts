export interface MovieResponse {
  dates: [];
  results: Movie[];
  page: number;
  total_pages: number;
  total_results: number;
}

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
export type MovieCategory = 'now_playing' | 'popular' | 'top_rated' | 'upcoming';

export interface MoviesState {
  now_playing: Movie[];
  popular: Movie[];
  top_rated: Movie[];
  upcoming: Movie[];
}

export const categoryToStateKey: Record<MovieCategory, keyof MoviesState> = {
  now_playing: 'now_playing',
  popular: 'popular',
  top_rated: 'top_rated',
  upcoming: 'upcoming',
};
