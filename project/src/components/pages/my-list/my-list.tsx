import Footer from '../../elements-page/footer/footer';
import Logo from '../../elements-page/logo/logo';
import React from 'react';
import {DATA_FILMS} from '../../../mock/films';
import CardFilm from '../../elements-page/card-film/card-film';
import UserInfo from '../../elements-page/user-info/user-info';

function MyFilm(): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">

        <Logo />

        <h1 className="page-title user-page__title">My list</h1>

        <UserInfo />

      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {DATA_FILMS.map((film) => film.isFavorite ? <CardFilm key={film.id} id={film.id} previewImage={film.previewImage} name={film.name} /> : ' ')}
        </div>
      </section>

      <Footer />

    </div>
  );
}

export default MyFilm;
