import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../consts';
import {MovieProps} from '../../types/movie';
import MyFilm from '../pages/my-list/my-list';
import Player from '../pages/player/player';
import SignIn from '../pages/sign-in/sign-in';
import AddReview from '../pages/add-review/add-review';
import NotFoundScreen from '../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import Movie from '../pages/movie/movie';
import Main from '../pages/main/main';

type AppProps = {
  movies: MovieProps[],
  promoMovie:MovieProps,
}

function App(movies: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <Main
            promoMovie = {movies.movies[0]}
            movies = {movies.movies}
          />
        </Route>
        <Route exact path={AppRoute.Film}>
          <Movie
            movies = {movies.movies}
          />
        </Route>
        <PrivateRoute exact path={AppRoute.MyList} authorizationStatus={AuthorizationStatus.Auth}>
          <MyFilm
            movies = {movies.movies}
          />
        </PrivateRoute>
        <PrivateRoute exact path={AppRoute.AddReview} authorizationStatus={AuthorizationStatus.Auth}>
          <AddReview
            movies = {movies.movies}
          />
        </PrivateRoute>
        <Route component={Player} exact path={AppRoute.Player}/>
        <Route component={SignIn} exact path={AppRoute.SignIn}/>
        <Route component={NotFoundScreen}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
