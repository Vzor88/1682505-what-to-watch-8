import {MovieProps} from '../../../types/movie';
import {GenreProps} from '../../../types/genre';

export function determinationGenresList(films:MovieProps[], activeGenre:string): GenreProps[] {
  const genresList = [];
  const enumerationGenres: (string | string[])[] = [];
  activeGenre === 'All genres' ? genresList.push({name: 'All genres', isActive: true}) : genresList.push({name: 'All genres', isActive: false});

  films.map((film:MovieProps) => {
    if(!enumerationGenres.includes(film.genre)){
      film.genre === activeGenre ? genresList.push({name: film.genre, isActive: true}) : genresList.push({name: film.genre, isActive: false});
      enumerationGenres.push(film.genre);
    }
    return enumerationGenres;
  });
  return genresList;
}
