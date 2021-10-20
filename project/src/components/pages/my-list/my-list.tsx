import Footer from '../../elements-page/footer/footer';
import {MovieProps} from '../../../types/movie';
import FilmsList from '../../elements-page/films-list/films-list';
import Header from '../../elements-page/header/header';

type MyFilmProps = {
  movies: MovieProps[];
}

function MyFilm(movies: MyFilmProps): JSX.Element {
  return (
    <div className="user-page">

      <Header isLight={false} isBreadcrumbs={false} isMiddleScreen text={'My list'}/>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmsList movies={movies.movies} countFilms={movies.movies.length} isFavorite/>
      </section>

      <Footer />

    </div>
  );
}

export default MyFilm;
