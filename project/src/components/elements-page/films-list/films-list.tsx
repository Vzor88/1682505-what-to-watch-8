import React from 'react';
import CardFilm from '../card-film/card-film';
import {MovieProps} from '../../../types/movie';
import {State} from '../../../types/state';
import {connect, ConnectedProps} from 'react-redux';

type FilmsListProps = {
  movies: MovieProps[];
  countFilms: number;
  isFavorite: boolean;
}

const mapStateToProps = ({filteredMovies}: State) => ({
  filteredMovies,
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & FilmsListProps;

function FilmsList(movies: ConnectedComponentProps): JSX.Element {
  const [, setActiveCard] = React.useState<number>(0);

  function handleActiveMovie(id: number): void {
    setActiveCard(id);
  }

  if(movies.isFavorite){
    return (
      <div className="catalog__films-list">
        {movies.movies.map((movie:MovieProps) => movie.isFavorite ? <CardFilm key={movie.id} movie={movie} updateCardFilm={handleActiveMovie} /> : ' ')}
      </div>
    );
  } else {
    return (
      <div className="catalog__films-list">
        {movies.filteredMovies.slice(0, movies.countFilms).map((movie)=> <CardFilm key={movie.id} movie={movie} updateCardFilm={handleActiveMovie} />)}
      </div>
    );
  }
}

export {FilmsList};
export default connector(FilmsList);
