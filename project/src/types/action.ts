export enum ActionType {
  ChangeGenre = 'filmList/changeGenre',
}

export type ChangeGenreAction = {
  type: ActionType.ChangeGenre;
  payload: string;
};

export type Actions = ChangeGenreAction;
