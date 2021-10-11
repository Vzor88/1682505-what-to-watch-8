import Footer from '../../elements-page/footer/footer';
import Logo from '../../elements-page/logo/logo';
import React from 'react';
import CardFilm from '../../elements-page/card-film/card-film';
import UserInfo from '../../elements-page/user-info/user-info';
import {FilmProps, FilmsProps} from '../../../types/movie';

type MyFilmProps = {
  activeMovie: FilmProps,
  movies: FilmsProps,
  newActiveMovie: any
}

function MyFilm(movies: MyFilmProps): JSX.Element {
  const [activeCard, setActiveCard] = React.useState(movies.activeMovie);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">

        <Logo />

        <h1 className="page-title user-page__title">My list</h1>

        <UserInfo />

      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list" onMouseMove={()=>{
          movies.newActiveMovie(activeCard);
        }}
        >
          {movies.movies.map((film:FilmProps) => film.isFavorite ? <CardFilm key={film.id} updateCardFilm={setActiveCard} film={film} /> : ' ')}
        </div>
      </section>

      <Footer />

    </div>
  );
}

export default MyFilm;
