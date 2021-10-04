import MainPage from '../main-page/main-page';

function App(): JSX.Element {
  return (
    <MainPage
      posterImage = {'img/the-grand-budapest-hotel-poster.jpg'}
      backgroundImage = {'img/bg-the-grand-budapest-hotel.jpg'}
      name = {'The Grand Budapest Hotel'}
      genre = {'Drama'}
      released = {2014}
    />
  );
}

export default App;
