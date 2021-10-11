import {SIZES} from './consts';
import {Link} from 'react-router-dom';
import React from 'react';
import {FilmProps} from '../../../types/movie';

type CardFilmProps = {
  film:FilmProps;
  updateCardFilm: any;
}

function CardFilm(props: CardFilmProps): JSX.Element {
  const {previewImage, name, id} = props.film;
  return (
    <article className="small-film-card catalog__films-card" onMouseMove={()=> {
      props.updateCardFilm(props.film);
    }}
    >
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width={SIZES.width} height={SIZES.height}/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>
  );
}

export default CardFilm;
