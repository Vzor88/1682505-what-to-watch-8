import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../constants';
import MyFilm from '../pages/my-list/my-list';
import Player from '../pages/player/player';
import SignIn from '../pages/sign-in/sign-in';
import AddReview from '../pages/add-review/add-review';
import NotFoundScreen from '../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import Movie from '../pages/movie/movie';
import Main from '../pages/main/main';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <Main />
        </Route>
        <Route exact path={AppRoute.Film}>
          <Movie />
        </Route>
        <PrivateRoute exact path={AppRoute.MyList} authorizationStatus={AuthorizationStatus.Auth}>
          <MyFilm />
        </PrivateRoute>
        <PrivateRoute exact path={AppRoute.AddReview} authorizationStatus={AuthorizationStatus.Auth}>
          <AddReview />
        </PrivateRoute>
        <Route component={Player} exact path={AppRoute.Player}/>
        <Route component={SignIn} exact path={AppRoute.SignIn}/>
        <Route component={NotFoundScreen}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
