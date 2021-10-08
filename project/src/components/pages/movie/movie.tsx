import {SIZES} from '../../../consts';
import {COUNT_SHORT_LIST_STARRING} from './consts';
import Footer from '../../elements-page/footer/footer';
import Logo from '../../elements-page/logo/logo';
import {Link} from 'react-router-dom';
import {MovieProps} from '../../../types/movie';
import SmallFilmsList from '../../elements-page/small-films-list/small-films-list';
import UserInfo from '../../elements-page/user-info/user-info';
import React from 'react';

function Movie(movie: { movie: MovieProps }): JSX.Element {
  const {id, name, posterImage, backgroundImage, genre, released, rating, scoresCount, description, director, starring} = movie.movie;
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
            <UserInfo />

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
                  <li className="film-nav__item film-nav__item--active">
                    <Link to={`/films/${id}`} className="film-nav__link">Overview</Link>
                  </li>
                  <li className="film-nav__item">
                    <Link to={`/films/${id}/details`} className="film-nav__link">Details</Link>
                  </li>
                  <li className="film-nav__item">
                    <Link to={`/films/${id}/reviews`} className="film-nav__link">Reviews</Link>
                  </li>
                </ul>
              </nav>

              <div className="film-rating">
                <div className="film-rating__score">{rating}</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">Very good</span>
                  <span className="film-rating__count">{scoresCount} ratings</span>
                </p>
              </div>

              <div className="film-card__text">{description}
                <p className="film-card__director"><strong>Director: {director}</strong></p>
                <p className="film-card__starring"><strong>Starring: {`${starring.slice(0, COUNT_SHORT_LIST_STARRING).join(', ')} and other` }</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <SmallFilmsList />

        </section>

        <Footer />

      </div>
    </>
  );
}

export default Movie;
