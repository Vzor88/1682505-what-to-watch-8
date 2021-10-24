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

const mapStateToProps = ({filteredFilms}: State) => ({
  filteredFilms,
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
        {movies.movies.map((film:MovieProps) => film.isFavorite ? <CardFilm key={film.id} film={film} updateCardFilm={handleActiveMovie} /> : ' ')}
      </div>
    );
  } else {
    return (
      <div className="catalog__films-list">
        {movies.filteredFilms.slice(0, movies.countFilms).map((film)=> <CardFilm key={film.id} film={film} updateCardFilm={handleActiveMovie} />)}
      </div>
    );
  }
}


export default connector(FilmsList);
