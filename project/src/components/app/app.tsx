import MainPage from '../main-page/main-page';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../consts';
import MyFilm from '../my-list/my-list';
import Player from '../player/player';
import SignIn from '../sign-in/sign-in';
import AddReview from '../add-review/add-review';
import Movie from '../movie/movie';
import MovieDetails from '../movie/movie-details';
import MovieReviews from '../movie/movie-reviews';
import NotFoundScreen from '../not-found-screen/not-found-screen';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainPage
            posterImage = {'img/the-grand-budapest-hotel-poster.jpg'}
            backgroundImage = {'img/bg-the-grand-budapest-hotel.jpg'}
            name = {'The Grand Budapest Hotel'}
            genre = {'Drama'}
            released = {2014}
          />
        </Route>
        <Route exact path={AppRoute.MyList}>
          <MyFilm />
        </Route>
        <Route exact path={AppRoute.Player}>
          <Player />
        </Route>
        <Route exact path={AppRoute.Film}>
          <Movie
            id = {1}
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
          />
        </Route>
        <Route exact path={AppRoute.FilmDetails}>
          <MovieDetails
            id = {1}
            name = {'The Grand Budapest Hotel'}
            posterImage = {'img/the-grand-budapest-hotel-poster.jpg'}
            backgroundImage = {'img/bg-the-grand-budapest-hotel.jpg'}
            genre = {'Drama'}
            released = {2014}
            director = {'Wes Anderson'}
            starring = {['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan', 'Tony Revoloru', 'Tilda Swinton', 'Tom Wilkinson']}
            runTime = {99}
          />
        </Route>
        <Route exact path={AppRoute.FilmReviews}>
          <MovieReviews
            id = {1}
            name = {'The Grand Budapest Hotel'}
            posterImage = {'img/the-grand-budapest-hotel-poster.jpg'}
            backgroundImage = {'img/bg-the-grand-budapest-hotel.jpg'}
            genre = {'Drama'}
            released = {2014}
          />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <SignIn />
        </Route>
        <Route exact path={AppRoute.AddReview}>
          <AddReview
            name = {'The Grand Budapest Hotel'}
            posterImage = {'img/the-grand-budapest-hotel-poster.jpg'}
            backgroundImage = {'img/bg-the-grand-budapest-hotel.jpg'}
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
