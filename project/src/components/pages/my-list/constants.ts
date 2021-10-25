import {State} from '../../../types/state';
import {MovieProps} from '../../../types/movie';

export const mapStateToProps = ({movies}: State):{ movies: MovieProps[] } => ({
  movies,
});
