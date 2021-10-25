import {State} from '../../../types/state';
import {MovieProps} from '../../../types/movie';

export const COUNT_RENDER_MOVIES_LIST = 8;

export const mapStateToProps = ({movies, promoMovie}: State):{ movies: MovieProps[]; promoMovie: MovieProps } => ({
  movies,
  promoMovie,
});
