import React from 'react';
import CardFilm from '../card-film/card-film';
import {FilmProps, FilmsProps} from '../../../types/movie';

type FilmsListProps = {
  movies: FilmsProps;
  newActiveCard: (movie: FilmProps) => void;
}

function FilmsList(movies: FilmsListProps): JSX.Element {
  const [, setActiveCard] = React.useState(movies.movies[0]);

  function handleActiveMovie(movie: FilmProps): void {
    setActiveCard(movie);
    movies.newActiveCard(movie);
  }

  return (
    <div className="catalog__films-list">
      {movies.movies.map((film:FilmProps) => <CardFilm key={film.id} film={film} updateCardFilm={handleActiveMovie} />)}
    </div>
  );
}

export default FilmsList;
