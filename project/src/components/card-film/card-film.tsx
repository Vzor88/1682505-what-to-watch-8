import {SIZES} from './consts';

type CardFilmProps = {
  previewImage: string;
  name: string;
}

function CardFilm(props: CardFilmProps): JSX.Element {
  const {previewImage, name} = props;
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

