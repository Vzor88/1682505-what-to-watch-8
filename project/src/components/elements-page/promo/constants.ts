import {State} from '../../../types/state';
import {MovieProps} from '../../../types/movie';

export const mapStateToProps = ({promoMovie}: State):{promoMovie: MovieProps} => ({
  promoMovie,
});
