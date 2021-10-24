import {State} from '../types/state';
import {Actions, ActionType} from '../types/action';
import {DATA_MOVIES} from '../mock/movies';
import {MovieProps} from '../types/movie';

const initialState = {
  genre: 'All genres',
  filteredFilms: DATA_MOVIES,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeGenre:
      return {...state, genre: action.payload, filteredFilms: DATA_MOVIES.filter((film:MovieProps) => film.genre === action.payload)};
    default:
      return state;
  }
};

export {reducer};
