import Footer from '../../elements-page/footer/footer';
import {MovieProps} from '../../../types/movie';
import GenresList from '../../elements-page/genres-list/genres-list';
import FilmsList from '../../elements-page/films-list/films-list';
import Promo from '../../elements-page/promo/promo';
import Header from '../../elements-page/header/header';

type MainProps = {
  promoMovie: MovieProps,
  movies: MovieProps[],
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

        <Header isLight={false} isBreadcrumbs={false} isMiddleScreen={false}/>

        <Promo movie = {movies.promoMovie}/>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">
            Catalog
          </h2>

          <GenresList
            films={movies.movies}
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
