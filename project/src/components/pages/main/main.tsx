import Footer from '../../elements-page/footer/footer';
import GenresList from '../../elements-page/genres-list/genres-list';
import FilmsList from '../../elements-page/films-list/films-list';
import Promo from '../../elements-page/promo/promo';
import Header from '../../elements-page/header/header';
import {connect, ConnectedProps} from 'react-redux';
import {INITIAL_COUNT_FILMS} from './constants';
import ShowMore from '../../elements-page/show-more/show-more';
import {useState} from 'react';
import {State} from '../../../types/state';
import {getFilteredMovies} from '../../../selectors';

const mapStateToProps = ({movies, promoMovie, genre}: State) => ({
  movies,
  promoMovie,
  genre,
});

const connector = connect(mapStateToProps);
type ConnectedComponentProps = ConnectedProps<typeof connector>;

function Main(movies: ConnectedComponentProps): JSX.Element {
  const [countMore, setCountMore] = useState<number>(INITIAL_COUNT_FILMS);
  const {backgroundImage, name} = movies.promoMovie;

  function onLoadMore():void {
    setCountMore((count) => INITIAL_COUNT_FILMS + count);
  }

  function resetLoadMore() {
    setCountMore(INITIAL_COUNT_FILMS);
  }

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name}/>
        </div>
        <h1 className="visually-hidden">WTW</h1>

        <Header
          isLight={false}
          isBreadcrumbs={false}
          isMiddleScreen={false}
        />

        <Promo />
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">
            Catalog
          </h2>

          <GenresList resetLoadMore={resetLoadMore}/>

          <FilmsList
            countFilms = {countMore}
            isFavorite = {false}
          />

          {countMore < getFilteredMovies(movies.movies, movies.genre).length ? <ShowMore onLoadMore={onLoadMore}/> : ' '}

        </section>

        <Footer />

      </div>
    </>
  );
}

export default connector(Main);
