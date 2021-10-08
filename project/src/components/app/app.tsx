import MainPage from '../pages/main/main-page';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../consts';
import MyFilm from '../pages/my-list/my-list';
import Player from '../pages/player/player';
import SignIn from '../pages/sign-in/sign-in';
import AddReview from '../pages/add-review/add-review';
import Movie from '../pages/movie/movie';
import MovieDetails from '../pages/movie/movie-details';
import MovieReviews from '../pages/movie/movie-reviews';
import NotFoundScreen from '../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import {MOVIE} from '../../mock/movie';
import React from 'react';
import {FilmsProps} from '../../types/movie';

function App(films: { films: FilmsProps }): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainPage
            movie={films.films[0]}
          />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          render={() => <MyFilm />}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Player}>
          <Player />
        </Route>
        <Route exact path={AppRoute.Film}>
          <Movie
            movie = {MOVIE}
          />
        </Route>
        <Route exact path={AppRoute.FilmDetails}>
          <MovieDetails
            movie = {MOVIE}
          />
        </Route>
        <Route exact path={AppRoute.FilmReviews}>
          <MovieReviews
            movie = {MOVIE}
          />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <SignIn />
        </Route>
        <Route exact path={AppRoute.AddReview}>
          <AddReview
            movie = {MOVIE}
          />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
