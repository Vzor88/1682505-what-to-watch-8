import {ActionType, ChangeGenreAction} from '../types/action';

export const changeGenre = (name: string): ChangeGenreAction => ({
  type: ActionType.ChangeGenre,
  payload: name,
});

