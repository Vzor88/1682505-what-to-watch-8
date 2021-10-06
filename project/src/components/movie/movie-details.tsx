import {SIZES} from '../../consts';
import Footer from '../footer/footer';
import Logo from '../logo/logo';
import {DATA_FILMS} from '../../mock/films';
import CardFilm from '../card-film/card-film';
import {Link} from 'react-router-dom';

type MovieDetailsProps = {
  id: number;
  name: string;
  posterImage: string;
  backgroundImage: string;
  genre: string;
  released: number;
  director: string;
  starring: string[];
  runTime: number;
}

const generateDuration = (minutes: number): string => {
  let hours = 0;
  while(minutes > 60) {
    hours += 1;
    minutes -= 60;
  }

  return !hours  ? `${minutes}m` : `${hours}h ${minutes}m`;
};

function MovieDetails(props: MovieDetailsProps): JSX.Element {
  const {id, name, posterImage, backgroundImage, genre, released, director, starring, runTime} = props;
  const url = ' ';
  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">

            <Logo />

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
            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"/>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"/>
                  </svg>
                  <span>My list</span>
                </button>
                <Link to={`/films/${id}/review/`} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={posterImage} alt={`${name} poster`} width={SIZES.POSTER.WIDTH} height={SIZES.POSTER.HEIGHT}/>
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item">
                    <Link to={`/films/${id}/`} className="film-nav__link">Overview</Link>
                  </li>
                  <li className="film-nav__item film-nav__item--active">
                    <Link to={`/films/${id}/details/`} className="film-nav__link">Details</Link>
                  </li>
                  <li className="film-nav__item">
                    <Link to={`/films/${id}/reviews/`} className="film-nav__link">Reviews</Link>
                  </li>
                </ul>
              </nav>
              <div className="film-card__text film-card__row">

                <div className="film-card__text-col">
                  <p className="film-card__details-item">
                    <strong className="film-card__details-name">Director</strong>
                    <span className="film-card__details-value">{director}</span>
                  </p>
                  <p className="film-card__details-item">
                    <strong className="film-card__details-name">Starring</strong>
                    <span className="film-card__details-value">
                      {`${starring.join(', \n')}` }
                    </span>
                  </p>
                </div>

                <div className="film-card__text-col">
                  <p className="film-card__details-item">
                    <strong className="film-card__details-name">Run Time</strong>
                    <span className="film-card__details-value">{generateDuration(runTime)}</span>
                  </p>
                  <p className="film-card__details-item">
                    <strong className="film-card__details-name">Genre</strong>
                    <span className="film-card__details-value">{genre}</span>
                  </p>
                  <p className="film-card__details-item">
                    <strong className="film-card__details-name">Released</strong>
                    <span className="film-card__details-value">{released}</span>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            {DATA_FILMS.slice(0,4).map((film) => <CardFilm key={film.id} previewImage={film.previewImage} name={film.name} />)}
          </div>
        </section>

        <Footer />

      </div>
    </>
  );
}

export default MovieDetails;