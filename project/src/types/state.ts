import {MovieProps} from './movie';

export type State = {
  genre: string,
  movies: MovieProps[],
  promoMovie: MovieProps,
};
