import {State} from '../../../types/state';
import {MovieProps} from '../../../types/movie';

export const INITIAL_COUNT_FILMS = 8;

export const mapStateToProps = ({movies, promoMovie, filteredMovies}: State):{ movies: MovieProps[]; promoMovie: MovieProps;filteredMovies: MovieProps[] } => ({
  movies,
  promoMovie,
  filteredMovies,
});
