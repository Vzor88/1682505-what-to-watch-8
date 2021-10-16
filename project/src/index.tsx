import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {DATA_FILMS} from './mock/films';
import {FilmProps} from './types/movie';
import {GenreProps} from './types/genres';

function determinationGenresList(films:FilmProps[]): GenreProps[] {
  const genresList = [];
  const enumerationGenres: (string | string[])[] = [];
  genresList.push({name: 'All genres', isActive: true});
  films.map((film:FilmProps) => {
    if(!enumerationGenres.includes(film.genre)){
      genresList.push({name: film.genre, isActive: false});
      enumerationGenres.push(film.genre);
    }
  });
  return genresList;
}

ReactDOM.render(
  <React.StrictMode>
    <App
      movies = {DATA_FILMS}
      promoMovie = {DATA_FILMS[0]}
      genres = {determinationGenresList(DATA_FILMS)}
    />
  </React.StrictMode>,
  document.getElementById('root'));
