import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {DATA_MOVIES} from './mock/movies';
import {reducer} from './store/reducer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(
  reducer,
  composeWithDevTools(),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        movies = {DATA_MOVIES}
        promoMovie = {DATA_MOVIES[0]}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
