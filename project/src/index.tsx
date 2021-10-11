import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {DATA_FILMS} from './mock/films';
import {GENRES_LIST} from './consts';

ReactDOM.render(
  <React.StrictMode>
    <App
      movies = {DATA_FILMS}
      promoMovie = {DATA_FILMS[0]}
      genres = {GENRES_LIST}
    />
  </React.StrictMode>,
  document.getElementById('root'));
