import React from 'react';
import CardFilm from '../card-film/card-film';
import {MovieProps} from '../../../types/movie';

type FilmsListProps = {
  movies: MovieProps[];
  countFilms: number;
  isFavorite: boolean;
}

function FilmsList(movies: FilmsListProps): JSX.Element {
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
        {movies.movies.slice(0, movies.countFilms).map((film:MovieProps) => <CardFilm key={film.id} film={film} updateCardFilm={handleActiveMovie} />)}
      </div>
    );
  }
}


export default FilmsList;
