import {SIZES} from '../../../consts';
import Logo from '../../elements-page/logo/logo';
import {FilmProps} from '../../../types/movie';
import UserInfo from '../../elements-page/user-info/user-info';
import React, {ChangeEvent} from 'react';
import {Link} from 'react-router-dom';

const Stars = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function AddReview(movie: { movie: FilmProps }): JSX.Element {
  const [, setValueStar] = React.useState(' ');
  const [, setValueText] = React.useState(' ');
  const {name, posterImage, backgroundImage, id} = movie.movie;
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">

          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${id}`} className="breadcrumbs__link">{name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to={`/films/${id}/review`} className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>

          <UserInfo />

        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={posterImage} alt={`${name} poster`} width={SIZES.POSTER.WIDTH} height={SIZES.POSTER.HEIGHT}/>
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form">
          <div className="rating">
            <div className="rating__stars">

              {Stars.map((star) => (
                <>
                  <input className="rating__input" id={`star-${star}`} type="radio" name="rating" value={star} onChange={({target}: ChangeEvent<HTMLInputElement>) => {
                    setValueStar(target.value);
                  }}
                  />
                  <label className="rating__label" htmlFor={`star-${star}`}>Rating {star}</label>
                </>
              ))}

            </div>
          </div>

          <div className="add-review__text">
            <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange={({target}: ChangeEvent<HTMLTextAreaElement>) => {
              setValueText(target.value);
            }}
            />
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>

          </div>
        </form>
      </div>
    </section>
  );
}

export default AddReview;

