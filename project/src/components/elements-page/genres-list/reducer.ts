import {State} from '../../../types/state';
import {DATA_MOVIES} from '../../../mock/movies';
import {Actions, ActionType} from './action/action-type';
import { Reducer } from 'redux';

const initialState = {
  genre: 'All genres',
  movies: DATA_MOVIES,
  promoMovie: DATA_MOVIES[0],
  filteredMovies: DATA_MOVIES,
};

const reducer:Reducer<State, Actions> = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeGenre:
      return {...state, genre: action.payload, filteredMovies: state.movies.filter((film) => film.genre === action.payload)};
    case ActionType.ResetGenre:
      return {...initialState};
    default:
      return state;
  }
};

export {reducer};
