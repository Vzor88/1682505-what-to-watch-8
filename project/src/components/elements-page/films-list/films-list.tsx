import React from 'react';
import CardFilm from '../card-film/card-film';
import {FilmProps} from '../../../types/movie';

type FilmsListProps = {
  movies: FilmProps[];
  newActiveCard: (movie: FilmProps) => void;
  countFilms: number;
  isFavorite: boolean;
}

function FilmsList(movies: FilmsListProps): JSX.Element {
  const [, setActiveCard] = React.useState(movies.movies[0]);

  function handleActiveMovie(movie: FilmProps): void {
    setActiveCard(movie);
    movies.newActiveCard(movie);
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
