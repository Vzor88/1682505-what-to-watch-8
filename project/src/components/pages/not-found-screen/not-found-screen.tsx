import Logo from '../../elements-page/logo/logo';
import Footer from '../../elements-page/footer/footer';
import React from 'react';
import {Link} from 'react-router-dom';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">

        <Logo />

      </header>

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
