import React from 'react';
import CardFilm from '../card-film/card-film';
import {FilmProps, FilmsProps} from '../../../types/movie';

function FilmsList(movies: {movies: FilmsProps, newActiveMovie: any, }): JSX.Element {
  const [active, setActiveCard] = React.useState(movies.movies[0]);

  return (
    <div className="catalog__films-list" onMouseMove={() => {
      movies.newActiveMovie(active);
    }}
    >
      {movies.movies.map((film:FilmProps) => <CardFilm key={film.id} film={film} updateCardFilm={setActiveCard} />)}
    </div>
  );
}

export default FilmsList;
