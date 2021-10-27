import {ActionType, ChangeGenreAction, ResetGenreAction} from './action-type';

export const changeGenre = (name: string): ChangeGenreAction => ({
  type: ActionType.ChangeGenre,
  payload: name,
});

export const resetGenre = (): ResetGenreAction => ({
  type: ActionType.ResetGenre,
});
