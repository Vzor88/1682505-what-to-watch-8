import {SIZES} from '../../../consts';
import {DATA_FILMS} from '../../../mock/films';
import CardFilm from '../../elements-page/card-film/card-film';
import Footer from '../../elements-page/footer/footer';
import Logo from '../../elements-page/logo/logo';
import {MovieProps} from '../../../types/movie';
import React from 'react';
import GenresList from '../../elements-page/genres-list/genres-list';
import UserInfo from '../../elements-page/user-info/user-info';

function MainPage(movie: any): JSX.Element {
  const mainPageDate:MovieProps = movie.movie;
  const {backgroundImage, name, genre, released, posterImage} = mainPageDate;
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name}/>
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header film-card__head">

          <Logo />
          <UserInfo />

        </header>
        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={posterImage} alt={`${name} poster`} width={SIZES.POSTER.WIDTH} height={SIZES.POSTER.HEIGHT}/>
            </div>
            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
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

          <GenresList />

          <div className="catalog__films-list">
            {DATA_FILMS.map((film) => <CardFilm key={film.id} id={film.id} previewImage={film.previewImage} name={film.name} />)}
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer />

      </div>
    </>
  );
}

export default MainPage;
