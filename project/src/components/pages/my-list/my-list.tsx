import Footer from '../../elements-page/footer/footer';
import FilmsList from '../../elements-page/films-list/films-list';
import Header from '../../elements-page/header/header';
import {connect, ConnectedProps} from 'react-redux';
import {mapStateToProps} from './constants';

const connector = connect(mapStateToProps);
type ConnectedComponentProps = ConnectedProps<typeof connector>;

function MyFilm(movies: ConnectedComponentProps): JSX.Element {
  return (
    <div className="user-page">

      <Header
        isLight={false}
        isBreadcrumbs={false}
        isMiddleScreen
        text={'My list'}
        id={' '}
        name={' '}
      />

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmsList countFilms={movies.movies.length} isFavorite/>
      </section>

      <Footer />

    </div>
  );
}

export {MyFilm};
export default connector(MyFilm);
