import React from 'react';
import CardFilm from '../card-film/card-film';
import {FilmProps, FilmsProps} from '../../../types/movie';

const COUNT_RENDER_FILMS_LIST = {
  MIN: 0,
  MAX: 4,
};

type SmallFilmsListProps = {
  movies: FilmsProps;
  newActiveCard: (movie: FilmProps) => void;
}

function SmallFilmsList(movies: SmallFilmsListProps): JSX.Element {
  const [active, setActiveCard] = React.useState(movies.movies[0]);

  return (
    <div className="catalog__films-list" onClick={() => {
      setActiveCard(active);
      movies.newActiveCard(active);
    }}
    >
      {movies.movies.slice(COUNT_RENDER_FILMS_LIST.MIN, COUNT_RENDER_FILMS_LIST.MAX).map((film) => <CardFilm key={film.id} updateCardFilm={setActiveCard} film={film} />)}
    </div>
  );
}

export default SmallFilmsList;
