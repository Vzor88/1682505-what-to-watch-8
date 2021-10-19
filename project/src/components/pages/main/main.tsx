import Footer from '../../elements-page/footer/footer';
import Logo from '../../elements-page/logo/logo';
import {FilmProps} from '../../../types/movie';
import React from 'react';
import GenresList from '../../elements-page/genres-list/genres-list';
import UserInfo from '../../elements-page/user-info/user-info';
import FilmsList from '../../elements-page/films-list/films-list';
import {GenreProps} from '../../../types/genres';
import Promo from '../../elements-page/promo/promo';

type MainProps = {
  promoMovie: FilmProps,
  movies: FilmProps[],
  genres: GenreProps[],
}

const COUNT_RENDER_FILMS_LIST = 8;

function Main(movies: MainProps): JSX.Element {
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={movies.promoMovie.backgroundImage} alt={movies.promoMovie.name}/>
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header film-card__head">

          <Logo />
          <UserInfo />

        </header>

        <Promo movie = {movies.promoMovie}/>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">
            Catalog
          </h2>

          <GenresList
            genres = {movies.genres}
          />

          <FilmsList
            movies={movies.movies}
            countFilms = {COUNT_RENDER_FILMS_LIST}
            isFavorite= {false}
          />

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer />

      </div>
    </>
  );
}

export default Main;
