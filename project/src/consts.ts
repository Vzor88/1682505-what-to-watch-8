export const SIZES = {
  POSTER: {
    WIDTH: 218,
    HEIGHT: 327,
  },
};

export enum AppRoute {
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  Main = '/',
  AddReview = '/films/:id/review',
  Player = '/player/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
}

export const GENRES_LIST: {name: string, isActive: boolean}[] = [
  {
    name: 'All genres',
    isActive: true,
  },
  {
    name: 'Comedies',
    isActive: false,
  },
  {
    name: 'Crime',
    isActive: false,
  },
  {
    name: 'Documentary',
    isActive: false,
  },
  {
    name: 'Dramas',
    isActive: false,
  },
  {
    name: 'Horror',
    isActive: false,
  },
  {
    name: 'Kids & Family',
    isActive: false,
  },
  {
    name: 'Romance',
    isActive: false,
  },
  {
    name: 'Sci-Fi',
    isActive: false,
  },
  {
    name: 'Thrillers',
    isActive: false,
  },
];
