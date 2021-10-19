import React from 'react';
import CardFilm from '../card-film/card-film';
import {FilmProps} from '../../../types/movie';

type FilmsListProps = {
  movies: FilmProps[];
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
        {movies.movies.map((film:FilmProps) => film.isFavorite ? <CardFilm key={film.id} film={film} updateCardFilm={handleActiveMovie} /> : ' ')}
      </div>
    );
  } else {
    return (
      <div className="catalog__films-list">
        {movies.movies.slice(0, movies.countFilms).map((film:FilmProps) => <CardFilm key={film.id} film={film} updateCardFilm={handleActiveMovie} />)}
      </div>
    );
  }
}

export default FilmsList;
