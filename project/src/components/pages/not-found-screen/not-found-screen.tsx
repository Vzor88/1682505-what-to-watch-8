import Footer from '../../elements-page/footer/footer';
import {Link} from 'react-router-dom';
import Header from '../../elements-page/header/header';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="user-page">

      <Header isLight={false} isBreadcrumbs={false} isMiddleScreen text={' '}/>

      <div className="sign-in user-page__content">
        <section className="page__screen">
          <h1 style={{fontSize:'2.5em'}}>404. Page not found</h1>
          <Link to="/" style={{textDecoration:'none', color:'#c9b37e', fontSize:'30px', fontWeight:'bold'}}>Вернуться на главную</Link>
        </section>
      </div>

      <Footer />

    </div>
  );
}

export default NotFoundScreen;
