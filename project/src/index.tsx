import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {DATA_MOVIES} from './mock/movies';

ReactDOM.render(
  <React.StrictMode>
    <App
      movies = {DATA_MOVIES}
      promoMovie = {DATA_MOVIES[0]}
    />
  </React.StrictMode>,
  document.getElementById('root'));
