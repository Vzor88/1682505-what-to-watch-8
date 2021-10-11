import {SIZES} from '../../../consts';
import Footer from '../../elements-page/footer/footer';
import Logo from '../../elements-page/logo/logo';
import {DATA_COMMENTS} from '../../../mock/comments';
import Comment from '../../elements-page/comment/comment';
import {Link} from 'react-router-dom';
import {FilmProps, FilmsProps} from '../../../types/movie';
import SmallFilmsList from '../../elements-page/films-list/small-films-list';
import UserInfo from '../../elements-page/user-info/user-info';
import React from 'react';

function MovieReviews(movies: { activeMovie: FilmProps, movies: FilmsProps, newActiveMovie: any }): JSX.Element {
  const [activeCard, setActiveCard] = React.useState(movies.activeMovie);
  movies.newActiveMovie(activeCard);
  const {id, name, posterImage, backgroundImage, genre, released} = movies.activeMovie;

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">

            <Logo />
            <UserInfo />

          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"/>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"/>
                  </svg>
                  <span>My list</span>
                </button>
                <Link to={`/films/${id}/review/`} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={posterImage} alt={`${name} poster`} width={SIZES.POSTER.WIDTH} height={SIZES.POSTER.HEIGHT}/>
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item">
                    <Link to={`/films/${id}`} className="film-nav__link">Overview</Link>
                  </li>
                  <li className="film-nav__item">
                    <Link to={`/films/${id}/details`} className="film-nav__link">Details</Link>
                  </li>
                  <li className="film-nav__item film-nav__item--active">
                    <Link to={`/films/${id}/reviews`} className="film-nav__link">Reviews</Link>
                  </li>
                </ul>
              </nav>
              <div className="film-card__reviews film-card__row">
                <div className="film-card__reviews-col">
                  {DATA_COMMENTS.slice(0, (DATA_COMMENTS.length + 1) / 2).map((comment) => <Comment key={comment.id} comment={comment.comment} user={comment.user} rating={comment.rating} date={comment.date} />)}
                </div>
                <div className="film-card__reviews-col">
                  {DATA_COMMENTS.slice((DATA_COMMENTS.length + 1) / 2, DATA_COMMENTS.length).map((comment) => <Comment key={comment.id} comment={comment.comment} user={comment.user} rating={comment.rating} date={comment.date} />)}
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title" onMouseMove={()=>{
            setActiveCard(activeCard);
          }}
          >
            More like this
          </h2>

          <SmallFilmsList
            movies = {movies.movies}
            activeCard = {setActiveCard}
          />

        </section>

        <Footer />

      </div>
    </>
  );
}

export default MovieReviews;
