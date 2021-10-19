import {SIZES} from '../../../consts';
import {MovieProps} from '../../../types/movie';
import React, {ChangeEvent} from 'react';
import {useParams} from 'react-router-dom';
import Star from '../../elements-page/star/star';
import Header from '../../elements-page/header/header';

const generateCountStars = new Array(10).fill(10).map((value:number, index:number) => value - index);

type ParamsProps = {
  id: string;
}

function AddReview(movies: { movies: MovieProps[] }): JSX.Element {
  const [, setValueStar] = React.useState<string>(' ');
  const [, setValueText] = React.useState<string>(' ');
  const {id}: ParamsProps = useParams<ParamsProps>();
  const film = movies.movies.filter((item) => item.id.toString() === id)[0];
  const {name, posterImage, backgroundImage} = film;
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header isLight={false} isBreadcrumbs isMiddleScreen={false} name={name} id={id}/>

        <div className="film-card__poster film-card__poster--small">
          <img src={posterImage} alt={`${name} poster`} width={SIZES.POSTER.WIDTH} height={SIZES.POSTER.HEIGHT}/>
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form">
          <div className="rating">
            <div className="rating__stars">
              {generateCountStars.map((star:number) => <Star star={star} key={star} updateValueStar={setValueStar} />)}

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

