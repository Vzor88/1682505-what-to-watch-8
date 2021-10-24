import {GenreProps} from '../../../types/genre';
import {MovieProps} from '../../../types/movie';
import GenreItem from '../genre-item/genre-item';
import React from 'react';
import {State} from '../../../types/state';
import {Actions} from '../../../types/action';
import {Dispatch} from 'redux';
import {changeGenre} from '../../../store/action';
import {connect, ConnectedProps} from 'react-redux';

type GenresListProps = {
  films: MovieProps[];
}

const mapStateToProps = ({genre}: State) => ({
  genre,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onChangeGenre(genre:string) {
    dispatch(changeGenre(genre));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & GenresListProps;

function determinationGenresList(films:MovieProps[], activeGenre:string): GenreProps[] {
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

function GenresList(films: ConnectedComponentProps): JSX.Element {
  const [activeGenre, setActiveGenre] = React.useState<string>('All genres');
  const genresList = determinationGenresList(films.films, activeGenre);

  function handleActiveGenre(nameGenre: string): void {
    setActiveGenre(nameGenre);
    films.onChangeGenre(nameGenre);
  }

  return (
    <ul className="catalog__genres-list">
      {genresList.map((genreItem) => <GenreItem key={genreItem.name} genre={genreItem} changeGenre={handleActiveGenre}/>)}
    </ul>
  );
}

export default connector(GenresList);
