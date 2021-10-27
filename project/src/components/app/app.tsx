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
        <Route component={Main} exact path={AppRoute.Main}/>
        <Route component={Movie} exact path={AppRoute.Film}/>
        <Route component={Player} exact path={AppRoute.Player}/>
        <Route component={SignIn} exact path={AppRoute.SignIn}/>
        <Route component={NotFoundScreen}/>
        <PrivateRoute component={MyFilm} exact path={AppRoute.MyList} authorizationStatus={AuthorizationStatus.Auth}/>
        <PrivateRoute component={AddReview} exact path={AppRoute.AddReview} authorizationStatus={AuthorizationStatus.Auth}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
