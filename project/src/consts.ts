export const SIZES = {
  POSTER: {
    WIDTH: 218,
    HEIGHT: 327,
  },
  AVATAR: {
    WIDTH: 63,
    HEIGHT: 63,
  },
};

export enum AppRoute {
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  FilmDetails = '/films/:id/details',
  FilmReviews = '/films/:id/reviews',
  Main = '/',
  AddReview = '/films/:id/review',
  Player = '/player/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
