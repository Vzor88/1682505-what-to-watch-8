import {COUNT_SHORT_LIST_STARRING} from '../../pages/movie/consts';
import {DATA_COMMENTS} from '../../../mock/comments';
import Comment from '../../elements-page/comment/comment';
import {MovieProps} from '../../../types/movie';
import React from 'react';

const generateDuration = (minutes: number): string => {
  let hours = 0;
  while(minutes > 60) {
    hours += 1;
    minutes -= 60;
  }

  return !hours  ? `${minutes}m` : `${hours}h ${minutes}m`;
};

type MovieTabsContentProps = {
  movie:MovieProps;
  index: number;
}

function MovieTabsContent(props: MovieTabsContentProps): JSX.Element {
  const {genre, released, rating, scoresCount, description, director, starring, runTime} = props.movie;

  return (
    <>
      {props.index === 0
        ?
        <div className="film-card__content">
          <div className="film-rating">
            <div className="film-rating__score">{rating}</div>
            <p className="film-rating__meta">
              <span className="film-rating__level">Very good</span>
              <span className="film-rating__count">{scoresCount} ratings</span>
            </p>
          </div>
          <div className="film-card__text">{description}
            <p className="film-card__director"><strong>Director: {director}</strong></p>
            <p className="film-card__starring"><strong>Starring: {`${starring.slice(0, COUNT_SHORT_LIST_STARRING).join(', ')} and other` }</strong></p>
          </div>
        </div>
        : ' '}
      {props.index === 1
        ?
        <div className="film-card__content">
          <div className="film-card__text film-card__row">
            <div className="film-card__text-col">
              <p className="film-card__details-item">
                <strong className="film-card__details-name">Director</strong>
                <span className="film-card__details-value">{director}</span>
              </p>
              <p className="film-card__details-item">
                <strong className="film-card__details-name">Starring</strong>
                <span className="film-card__details-value">
                  {starring.map((star:string) => (
                    <React.Fragment key={star}>
                      {star},<br />
                    </React.Fragment>
                  ))}
                </span>
              </p>
            </div>
            <div className="film-card__text-col">
              <p className="film-card__details-item">
                <strong className="film-card__details-name">Run Time</strong>
                <span className="film-card__details-value">{generateDuration(runTime)}</span>
              </p>
              <p className="film-card__details-item">
                <strong className="film-card__details-name">Genre</strong>
                <span className="film-card__details-value">{genre}</span>
              </p>
              <p className="film-card__details-item">
                <strong className="film-card__details-name">Released</strong>
                <span className="film-card__details-value">{released}</span>
              </p>
            </div>
          </div>
        </div>
        : ' '}
      {props.index === 2
        ?
        <div className="film-card__content">
          <div className="film-card__reviews film-card__row">
            <div className="film-card__reviews-col">
              {DATA_COMMENTS.slice(0, (DATA_COMMENTS.length + 1) / 2).map((comment) => <Comment key={comment.id} comment={comment.comment} user={comment.user} rating={comment.rating} date={comment.date} />)}
            </div>
            <div className="film-card__reviews-col">
              {DATA_COMMENTS.slice((DATA_COMMENTS.length + 1) / 2, DATA_COMMENTS.length).map((comment) => <Comment key={comment.id} comment={comment.comment} user={comment.user} rating={comment.rating} date={comment.date} />)}
            </div>
          </div>
        </div>
        : ' '}
    </>
  );
}

export default MovieTabsContent;
