import {ActionType, ChangeGenreAction, ResetGenreAction} from '../types/action';

export const changeGenre = (name: string): ChangeGenreAction => ({
  type: ActionType.ChangeGenre,
  payload: name,
});

export const resetGenre = (): ResetGenreAction => ({
  type: ActionType.ResetGenre,
});
