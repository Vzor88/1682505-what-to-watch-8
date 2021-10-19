import Main from '../pages/main/main';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../consts';
import MyFilm from '../pages/my-list/my-list';
import Player from '../pages/player/player';
import SignIn from '../pages/sign-in/sign-in';
import AddReview from '../pages/add-review/add-review';
import NotFoundScreen from '../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import React from 'react';
import {FilmProps} from '../../types/movie';
import MoviePage from '../pages/movie/movie-page';
import {GenreProps} from '../../types/genres';

type AppProps = {
  movies: FilmProps[],
  promoMovie:FilmProps,
  genres: GenreProps[],
}

function App(movies: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact path={AppRoute.Main}
          render={() => <Main promoMovie = {movies.movies[0]} movies = {movies.movies} genres = {movies.genres}/>}
        >
        </Route>
        <PrivateRoute
          exact path={AppRoute.MyList}
          render={() => <MyFilm movies = {movies.movies}/>}
          authorizationStatus={AuthorizationStatus.Auth}
        >
        </PrivateRoute>
        <Route
          exact path={AppRoute.Player}
          render={() => <Player />}
        >
        </Route>
        <Route
          exact path={AppRoute.Film}
          render={() => <MoviePage movies = {movies.movies} />}
        >
        </Route>
        <Route
          exact path={AppRoute.SignIn}
          render={() => <SignIn />}
        >
        </Route>
        <PrivateRoute
          exact path={AppRoute.AddReview}
          render={() => <AddReview movies = {movies.movies}/>}
          authorizationStatus={AuthorizationStatus.Auth}
        >
        </PrivateRoute>
        <Route
          render={() => <NotFoundScreen />}
        >
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
