import {CardFilmProps} from '../../types/card-film';

const SIZES = {
  width: 280,
  height: 175,
};

function CardFilm({previewImage, name}: CardFilmProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width={SIZES.width} height={SIZES.height}/>
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{name}</a>
      </h3>
    </article>
  );
}

export default CardFilm;

