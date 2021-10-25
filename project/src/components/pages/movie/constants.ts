import {State} from '../../../types/state';
import {MovieProps} from '../../../types/movie';

export const COUNT_SHORT_LIST_STARRING = 4;
export const COUNT_RENDER_MOVIES_LIST = 4;


export const mapStateToProps = ({movies}: State):{ movies: MovieProps[] }  => ({
  movies,
});
