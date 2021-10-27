import {MovieProps} from './types/movie';

export function getFilteredMovies(movies: MovieProps[], genre: string):MovieProps[] {
  if(genre === 'All genres'){
    return movies;
  } else {
    return movies.filter((movie) => movie.genre === genre);
  }
}
