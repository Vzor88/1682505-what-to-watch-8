import {SIZES} from '../../consts';
import {DATA_FILMS} from '../../mock/films';
import CardFilm from '../card-film/card-film';

type MainPageProps = {
  posterImage: string;
  backgroundImage: string;
  name: string;
  genre: string;
  released: number;
}

function MainPage(props: MainPageProps): JSX.Element {
  const {posterImage, backgroundImage, name, genre, released} = props;
  const url = ' ';
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name}/>
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header film-card__head">
          <div className="logo">
            <a href={url} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>
          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width={SIZES.AVATAR.WIDTH} height={SIZES.AVATAR.HEIGHT}/>
              </div>
            </li>
            <li className="user-block__item">
              <a href={url} className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>
        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={posterImage} alt={`${name} poster`} width={SIZES.POSTER.WIDTH} height={SIZES.POSTER.HEIGHT}/>
            </div>
            <div className="film-card__desc">
              <h2 className="film-card__title">The Grand Budapest Hotel</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>
              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <ul className="catalog__genres-list">
            <li className="catalog__genres-item catalog__genres-item--active">
              <a href={url} className="catalog__genres-link">All genres</a>
            </li>
            <li className="catalog__genres-item">
              <a href={url} className="catalog__genres-link">Comedies</a>
            </li>
            <li className="catalog__genres-item">
              <a href={url} className="catalog__genres-link">Crime</a>
            </li>
            <li className="catalog__genres-item">
              <a href={url} className="catalog__genres-link">Documentary</a>
            </li>
            <li className="catalog__genres-item">
              <a href={url} className="catalog__genres-link">Dramas</a>
            </li>
            <li className="catalog__genres-item">
              <a href={url} className="catalog__genres-link">Horror</a>
            </li>
            <li className="catalog__genres-item">
              <a href={url} className="catalog__genres-link">Kids & Family</a>
            </li>
            <li className="catalog__genres-item">
              <a href={url} className="catalog__genres-link">Romance</a>
            </li>
            <li className="catalog__genres-item">
              <a href={url} className="catalog__genres-link">Sci-Fi</a>
            </li>
            <li className="catalog__genres-item">
              <a href={url} className="catalog__genres-link">Thrillers</a>
            </li>
          </ul>

          <div className="catalog__films-list">
            {DATA_FILMS.map((film) => <CardFilm key={film.id} previewImage={film.previewImage} name={film.name} />)}
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href={url} className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default MainPage;
