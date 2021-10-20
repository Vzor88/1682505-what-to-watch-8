import {SIZES} from '../../../consts';
import {COUNT_RENDER_FILMS_LIST} from './consts';
import {MovieProps} from '../../../types/movie';
import {MoviePageProps, ParamsProps} from './type';
import Footer from '../../elements-page/footer/footer';
import {Link, useParams} from 'react-router-dom';
import FilmsList from '../../elements-page/films-list/films-list';
import Header from '../../elements-page/header/header';
import MovieTabs from '../../elements-page/movie-tabs/movie-tabs';

function Movie(movies: MoviePageProps): JSX.Element {
  const {id}: ParamsProps = useParams();
  const movie = movies.movies.filter((item:MovieProps) => item.id.toString() === id)[0];
  const {name, posterImage, backgroundImage, genre, released} = movie;

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header isLight={false} isBreadcrumbs={false} isMiddleScreen={false}/>

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

              <MovieTabs movie={movie} />

            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">
            More like this
          </h2>

          <FilmsList
            movies = {movies.movies}
            countFilms={COUNT_RENDER_FILMS_LIST}
            isFavorite={false}
          />

        </section>

        <Footer />

      </div>
    </>
  );
}

export default Movie;
