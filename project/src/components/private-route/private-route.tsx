import {Route, Redirect} from 'react-router-dom';
import {RouteProps} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../constants';

type PrivateRouteProps = RouteProps & {
  authorizationStatus: AuthorizationStatus;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {exact, path, authorizationStatus} = props;

  return (
    <Route exact={exact} path={path}>
      {authorizationStatus === AuthorizationStatus.Auth ? props.children : <Redirect to={AppRoute.SignIn}/>}
    </Route>
  );
}

export default PrivateRoute;
