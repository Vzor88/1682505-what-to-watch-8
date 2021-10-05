import Logo from '../logo/logo';
import Footer from '../footer/footer';
import React from 'react';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">

        <Logo />

      </header>

      <div className="sign-in user-page__content">
        <section className="page__screen">
          <h1>404. Page not found</h1>
          <a href="/">Вернуться на главную</a>
        </section>
      </div>

      <Footer />

    </div>
  );
}

export default NotFoundScreen;
