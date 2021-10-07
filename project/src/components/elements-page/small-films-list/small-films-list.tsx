import React from 'react';
import {DATA_FILMS} from '../../../mock/films';
import CardFilm from '../card-film/card-film';

const COUNT_RENDER_FILMS_LIST = {
  MIN: 0,
  MAX: 4,
};

function SmallFilmsList(): JSX.Element {
  return (
    <div className="catalog__films-list">
      {DATA_FILMS.slice(COUNT_RENDER_FILMS_LIST.MIN, COUNT_RENDER_FILMS_LIST.MAX).map((film) => <CardFilm key={film.id} id={film.id} previewImage={film.previewImage} name={film.name} />)}
    </div>
  );
}

export default SmallFilmsList;
