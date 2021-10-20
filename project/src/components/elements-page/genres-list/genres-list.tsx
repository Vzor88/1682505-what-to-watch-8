import {GenreProps} from '../../../types/genre';
import {MovieProps} from '../../../types/movie';
import GenreItem from '../genre-item/genre-item';

type GenresListProps = {
  films: MovieProps[];
}

function determinationGenresList(films:MovieProps[]): GenreProps[] {
  const genresList = [];
  const enumerationGenres: (string | string[])[] = [];
  genresList.push({name: 'All genres', isActive: true});
  films.map((film:MovieProps) => {
    if(!enumerationGenres.includes(film.genre)){
      genresList.push({name: film.genre, isActive: false});
      enumerationGenres.push(film.genre);
    }
    return enumerationGenres;
  });
  return genresList;
}

function GenresList(films: GenresListProps): JSX.Element {
  const genresList = determinationGenresList(films.films);
  return (
    <ul className="catalog__genres-list">
      {genresList.map((genreItem) => <GenreItem name={genreItem.name} key={genreItem.name} isActive={genreItem.isActive} />)}
    </ul>
  );
}

export default GenresList;
