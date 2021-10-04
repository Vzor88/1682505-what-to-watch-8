import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import CardFilm from './components/card-film/card-film';
import {DataFilms} from './mock/films';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'));

ReactDOM.render(
  <React.StrictMode>
    <React.Fragment>
      {DataFilms.map((film) => <CardFilm key={film.id} previewImage={film.previewImage} name={film.name} />)}
    </React.Fragment>
  </React.StrictMode>,
  document.querySelector('.catalog__films-list'));
