import Footer from '../../elements-page/footer/footer';
import Logo from '../../elements-page/logo/logo';
import React from 'react';
import UserInfo from '../../elements-page/user-info/user-info';
import {FilmProps} from '../../../types/movie';
import FilmsList from '../../elements-page/films-list/films-list';

type MyFilmProps = {
  activeMovie: FilmProps;
  movies: FilmProps[];
  newActiveMovie: (movie: FilmProps) => void;
}

function MyFilm(movies: MyFilmProps): JSX.Element {
  const [, setActiveCard] = React.useState(movies.activeMovie);

  function handleActiveMovie(movie: FilmProps): void {
    setActiveCard(movie);
    movies.newActiveMovie(movie);
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">

        <Logo />

        <h1 className="page-title user-page__title">My list</h1>

        <UserInfo />

      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmsList movies={movies.movies} newActiveCard={handleActiveMovie} countFilms={movies.movies.length} isFavorite/>
      </section>

      <Footer />

    </div>
  );
}

export default MyFilm;
