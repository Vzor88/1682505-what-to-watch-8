import {MovieProps} from '../../../types/movie';
import {GenreProps} from '../../../types/genre';

export function determinationGenresList(films:MovieProps[], activeGenre:string): GenreProps[] {
  const genresList = [];
  const enumerationGenres: (string | string[])[] = [];
  genresList.push({name: 'All genres', isActive: (activeGenre === 'All genres')});

  films.map((film:MovieProps) => {
    if(!enumerationGenres.includes(film.genre)){
      genresList.push({name: film.genre, isActive: (film.genre === activeGenre)});
      enumerationGenres.push(film.genre);
    }
    return enumerationGenres;
  });
  return genresList;
}
