export enum ActionType {
  ChangeGenre = 'filter/changeGenre',
  ResetGenre = 'filter/reset',
}

export type ChangeGenreAction = {
  type: ActionType.ChangeGenre;
  payload: string;
};

export type ResetGenreAction = {
  type: ActionType.ResetGenre;
}

export type Actions = ChangeGenreAction | ResetGenreAction;
