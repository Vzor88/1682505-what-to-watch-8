import GenreItem from '../genre-item/genre-item';
import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from './constants';
import {determinationGenresList} from './selectors';

type GenreListProps = {
  resetLoadMore:() => void;
}

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & GenreListProps;

function GenresList(movies: ConnectedComponentProps): JSX.Element {
  const [activeGenre, setActiveGenre] = React.useState<string>('All genres');
  const genresList = determinationGenresList(movies.movies, activeGenre);

  function handleActiveGenre(nameGenre: string): void {
    setActiveGenre(nameGenre);
    movies.onChangeGenre(nameGenre);
    movies.resetLoadMore();
  }

  return (
    <ul className="catalog__genres-list">
      {genresList.map((genreItem) => <GenreItem key={genreItem.name} genre={genreItem} changeGenre={handleActiveGenre}/>)}
    </ul>
  );
}

export {GenresList};
export default connector(GenresList);
