import {State} from '../../../types/state';
import {Dispatch} from 'redux';
import {changeGenre, resetGenre} from './action/action';
import {Actions} from './action/action-type';
import {MovieProps} from '../../../types/movie';

export const mapStateToProps = ({genre, movies}: State):{ movies: MovieProps[]; genre: string } => ({
  genre,
  movies,
});

export const mapDispatchToProps = (dispatch: Dispatch<Actions>):{ onChangeGenre(genre: string): void } => ({
  onChangeGenre(genre){
    genre === 'All genres' ? dispatch(resetGenre()) : dispatch(changeGenre(genre));
  },
});
