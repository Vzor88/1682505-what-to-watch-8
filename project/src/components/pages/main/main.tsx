import Footer from '../../elements-page/footer/footer';
import GenresList from '../../elements-page/genres-list/genres-list';
import FilmsList from '../../elements-page/films-list/films-list';
import Promo from '../../elements-page/promo/promo';
import Header from '../../elements-page/header/header';
import {COUNT_RENDER_MOVIES_LIST} from './constants';
import {connect, ConnectedProps} from 'react-redux';
import {mapStateToProps} from './constants';

const connector = connect(mapStateToProps);
type ConnectedComponentProps = ConnectedProps<typeof connector>;

function Main(movies: ConnectedComponentProps): JSX.Element {
  const {backgroundImage, name} = movies.promoMovie;
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
          id={' '}
          name={' '}
          text={' '}
        />

        <Promo />
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">
            Catalog
          </h2>

          <GenresList />

          <FilmsList
            countFilms = {COUNT_RENDER_MOVIES_LIST}
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

export default connector(Main);
