import Main from '../pages/main/main';
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
import React from 'react';
import {FilmProps, FilmsProps} from '../../types/movie';
import {GenreProps} from '../../types/genres';

type AppProps = {
  movies: FilmsProps,
  promoMovie:FilmProps,
  genres: GenreProps[]
}

function App(movies: AppProps): JSX.Element {
  const [activeMovie, setActiveCard] = React.useState(movies.movies[0]);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <Main
            promoMovie = {movies.movies[0]}
            movies = {movies.movies}
            newActiveMovie = {setActiveCard}
            genres = {movies.genres}
          />
        </Route>
        <PrivateRoute
          exact path={AppRoute.MyList}
          render={() => <MyFilm activeMovie = {activeMovie} movies = {movies.movies} newActiveMovie = {setActiveCard}/>}
          authorizationStatus={AuthorizationStatus.Auth}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Player}>
          <Player />
        </Route>
        <Route exact path={AppRoute.Film}>
          <Movie
            activeMovie = {activeMovie}
            movies = {movies.movies}
            newActiveMovie = {setActiveCard}
          />
        </Route>
        <Route exact path={AppRoute.FilmDetails}>
          <MovieDetails
            activeMovie = {activeMovie}
            movies = {movies.movies}
            newActiveMovie = {setActiveCard}
          />
        </Route>
        <Route exact path={AppRoute.FilmReviews}>
          <MovieReviews
            activeMovie = {activeMovie}
            movies = {movies.movies}
            newActiveMovie = {setActiveCard}
          />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <SignIn />
        </Route>
        <PrivateRoute
          exact path={AppRoute.AddReview}
          render={() => <AddReview movie = {activeMovie}/>}
          authorizationStatus={AuthorizationStatus.Auth}
        >
        </PrivateRoute>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
