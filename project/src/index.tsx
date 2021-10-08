import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {DATA_FILMS} from './mock/films';

ReactDOM.render(
  <React.StrictMode>
    <App
      films = {DATA_FILMS}
    />
  </React.StrictMode>,
  document.getElementById('root'));
