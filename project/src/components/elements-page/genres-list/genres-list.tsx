import {MovieProps} from '../../../types/movie';
import GenreItem from '../genre-item/genre-item';
import React from 'react';
import {State} from '../../../types/state';
import {Actions} from '../../../types/action';
import {Dispatch} from 'redux';
import {changeGenre, resetGenre} from '../../../store/action';
import {connect, ConnectedProps} from 'react-redux';
import {determinationGenresList} from './utils.js';

type GenresListProps = {
  films: MovieProps[];
}

const mapStateToProps = ({genre}: State) => ({
  genre,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onChangeGenre(genre:string) {
    genre === 'All genres' ? dispatch(resetGenre()) : dispatch(changeGenre(genre));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & GenresListProps;

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

export {GenresList};
export default connector(GenresList);
