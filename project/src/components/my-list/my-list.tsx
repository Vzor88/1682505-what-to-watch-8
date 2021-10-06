import {SIZES} from '../../consts';
import Footer from '../footer/footer';
import Logo from '../logo/logo';
import React from 'react';
import {DATA_FILMS} from '../../mock/films';
import CardFilm from '../card-film/card-film';

function MyFilm(): JSX.Element {
  const url = ' ';
  return (
    <div className="user-page">
      <header className="page-header user-page__head">

        <Logo />

        <h1 className="page-title user-page__title">My list</h1>

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

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {DATA_FILMS.map((film) => film.isFavorite ? <CardFilm key={film.id} previewImage={film.previewImage} name={film.name} /> : ' ')}
        </div>
      </section>

      <Footer />

    </div>
  );
}

export default MyFilm;
