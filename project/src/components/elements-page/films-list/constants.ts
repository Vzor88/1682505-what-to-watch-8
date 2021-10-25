import {State} from '../../../types/state';
import {MovieProps} from '../../../types/movie';

export const mapStateToProps = ({filteredMovies, movies}: State):{ movies: MovieProps[]; filteredMovies: MovieProps[] } => ({
  filteredMovies,
  movies,
});
