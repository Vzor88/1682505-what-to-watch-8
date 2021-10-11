import React from 'react';
import CardFilm from '../card-film/card-film';
import {FilmsProps} from '../../../types/movie';

const COUNT_RENDER_FILMS_LIST = {
  MIN: 0,
  MAX: 4,
};

function SmallFilmsList(movies: {movies: FilmsProps, activeCard: any}): JSX.Element {
  const [active, setActiveCard] = React.useState(movies.movies[0]);
  return (
    <div className="catalog__films-list" onClick={() => {
      movies.activeCard(active);
    }}
    >
      {movies.movies.slice(COUNT_RENDER_FILMS_LIST.MIN, COUNT_RENDER_FILMS_LIST.MAX).map((film) => <CardFilm key={film.id} updateCardFilm={setActiveCard} film={film} />)}
    </div>
  );
}

export default SmallFilmsList;
