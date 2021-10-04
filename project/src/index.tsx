import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import SignIn from './components/sign-in/sign-in';
import MyFilm from './components/my-list/my-list';
import CardFilm from './components/card-film/card-film';
import {DataFilms} from './mock/films';
import Movie from './components/movie/movie';
import AddReview from './components/add-review/add-review';
import {DataComments} from './mock/comments';
import Comment from './components/comment/comment';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <SignIn />
    <MyFilm />
    <Movie
      name = {'The Grand Budapest Hotel'}
      posterImage = {'img/the-grand-budapest-hotel-poster.jpg'}
      backgroundImage = {'img/bg-the-grand-budapest-hotel.jpg'}
      genre = {'Drama'}
      released = {2014}
      rating = {8.9}
      scoresCount = {240}
      description = {'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H.' +
                     ' (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege. Gustave prides himself on providing' +
                     ' first-class service to the hotel\'s guests, including satisfying the sexual needs of the many elderly women who stay there.' +
                     ' When one of Gustave\'s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.'}
      director = {'Wes Anderson'}
      starring = {['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan', 'Tony Revoloru', 'Tilda Swinton', 'Tom Wilkinson']}
      runTime = {99}
    />
    <AddReview
      name = {'The Grand Budapest Hotel'}
      posterImage = {'img/the-grand-budapest-hotel-poster.jpg'}
      backgroundImage = {'img/bg-the-grand-budapest-hotel.jpg'}
    />
  </React.StrictMode>,
  document.getElementById('root'));

ReactDOM.render(
  <React.StrictMode>
    <React.Fragment>
      {DataFilms.map((film) => <CardFilm key={film.id} previewImage={film.previewImage} name={film.name} />)}
    </React.Fragment>
  </React.StrictMode>,
  document.querySelector('.catalog__films-list'));

ReactDOM.render(
  <React.StrictMode>
    <React.Fragment>
      {DataFilms.map((film) => film.isFavorite ? <CardFilm key={film.id} previewImage={film.previewImage} name={film.name} /> : ' ')}
    </React.Fragment>
  </React.StrictMode>,
  document.querySelector('.catalog__films-list--my-list'));

ReactDOM.render(
  <React.StrictMode>
    <React.Fragment>
      {DataFilms.slice(0,4).map((film) => <CardFilm key={film.id} previewImage={film.previewImage} name={film.name} />)}
    </React.Fragment>
  </React.StrictMode>,
  document.querySelector('.catalog__films-list--movie'));

if(DataComments.length % 2 > 0){
  ReactDOM.render(
    <React.StrictMode>
      <React.Fragment>
        {DataComments.slice(0, (DataComments.length + 1) / 2).map((comment) => <Comment key={comment.id} comment={comment.comment} user={comment.user} rating={comment.rating} date={comment.date} />)}
      </React.Fragment>
    </React.StrictMode>,
    document.querySelector('.film-card__reviews-col'));
  ReactDOM.render(
    <React.StrictMode>
      <React.Fragment>
        {DataComments.slice((DataComments.length + 1) / 2, DataComments.length).map((comment) => <Comment key={comment.id} comment={comment.comment} user={comment.user} rating={comment.rating} date={comment.date} />)}
      </React.Fragment>
    </React.StrictMode>,
    document.querySelector('.film-card__reviews-col--2'));
} else {
  ReactDOM.render(
    <React.StrictMode>
      <React.Fragment>
        {DataComments.slice(0, DataComments.length / 2).map((comment) => <Comment key={comment.id} comment={comment.comment} user={comment.user} rating={comment.rating} date={comment.date} />)}
      </React.Fragment>
    </React.StrictMode>,
    document.querySelector('.film-card__reviews-col'));
  ReactDOM.render(
    <React.StrictMode>
      <React.Fragment>
        {DataComments.slice(DataComments.length / 2, DataComments.length).map((comment) => <Comment key={comment.id} comment={comment.comment} user={comment.user} rating={comment.rating} date={comment.date} />)}
      </React.Fragment>
    </React.StrictMode>,
    document.querySelector('.film-card__reviews-col--2'));
}
