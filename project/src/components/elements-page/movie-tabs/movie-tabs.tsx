import {COUNT_SHORT_LIST_STARRING} from '../../pages/movie/consts';
import {DATA_COMMENTS} from '../../../mock/comments';
import Comment from '../../elements-page/comment/comment';
import {MovieProps} from '../../../types/movie';

const generateDuration = (minutes: number): string => {
  let hours = 0;
  while(minutes > 60) {
    hours += 1;
    minutes -= 60;
  }

  return !hours  ? `${minutes}m` : `${hours}h ${minutes}m`;
};

type MovieTabsProps = {
  movie:MovieProps;
}

function MovieTabs(movie: MovieTabsProps): JSX.Element {
  const {genre, released, rating, scoresCount, description, director, starring , runTime} = movie.movie;

  function handleClickNavElement(event: React.MouseEvent<HTMLLIElement>):void {
    const filmCardsContent = document.querySelectorAll('.film-card__content');
    const filmNavItem = document.querySelectorAll('.film-nav__item');
    filmCardsContent.forEach((element) => {
      element.classList.remove('film-card__content--active');
      if(event.currentTarget.textContent){
        if(element.classList.contains(event.currentTarget.textContent.toLowerCase())){
          element.classList.add('film-card__content--active');
        }
      }
    });
    filmNavItem.forEach((element) => {
      element.classList.remove('film-nav__item--active');
      if(element === event.currentTarget.parentElement){
        element.classList.add('film-nav__item--active');
      }
    });
  }

  return (
    <div className="film-card__tabs">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className="film-nav__item film-nav__item--active film-nav__item--overview" onClick={handleClickNavElement}>
            <p className="film-nav__link">Overview</p>
          </li>
          <li className="film-nav__item film-nav__item--details" onClick={handleClickNavElement}>
            <p className="film-nav__link">Details</p>
          </li>
          <li className="film-nav__item film-nav__item--reviews" onClick={handleClickNavElement}>
            <p className="film-nav__link">Reviews</p>
          </li>
        </ul>
      </nav>
      <div className="film-card__content overview film-card__content--active film-card__content--overview">
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

      <div className="film-card__content details film-card__content--details">
        <div className="film-card__text film-card__row">
          <div className="film-card__text-col">
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Director</strong>
              <span className="film-card__details-value">{director}</span>
            </p>
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Starring</strong>
              <span className="film-card__details-value">
                {`${starring.join(', \n')}` }
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

      <div className="film-card__content reviews film-card__content--reviews">
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

  );
}

export default MovieTabs;
