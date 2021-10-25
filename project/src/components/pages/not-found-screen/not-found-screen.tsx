import Footer from '../../elements-page/footer/footer';
import {Link} from 'react-router-dom';
import Header from '../../elements-page/header/header';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="user-page">

      <Header
        isLight={false}
        isBreadcrumbs={false}
        isMiddleScreen
        text={'Unknown page'}
        id={' '}
        name={' '}
      />

      <div className="sign-in user-page__content">
        <section className="page__screen">
          <h1 className="sign-in__title">404. Page not found</h1>
          <Link className="sign-in__link" to="/" >Go back to the main page</Link>
        </section>
      </div>

      <Footer />

    </div>
  );
}

export default NotFoundScreen;
