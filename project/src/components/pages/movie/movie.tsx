import {SIZES} from '../../../consts';
import {COUNT_RENDER_FILMS_LIST, COUNT_SHORT_LIST_STARRING} from './consts';
import {DATA_COMMENTS} from '../../../mock/comments';
import {MovieProps} from '../../../types/movie';
import {MoviePageProps, ParamsProps} from './type';
import Footer from '../../elements-page/footer/footer';
import {Link, useParams} from 'react-router-dom';
import Comment from '../../elements-page/comment/comment';
import FilmsList from '../../elements-page/films-list/films-list';
import Header from '../../elements-page/header/header';

const generateDuration = (minutes: number): string => {
  let hours = 0;
  while(minutes > 60) {
    hours += 1;
    minutes -= 60;
  }

  return !hours  ? `${minutes}m` : `${hours}h ${minutes}m`;
};

function Movie(movies: MoviePageProps): JSX.Element {
  const {id}: ParamsProps = useParams();
  const movie = movies.movies.filter((item:MovieProps) => item.id.toString() === id)[0];
  const {name, posterImage, backgroundImage, genre, released, rating, scoresCount, description, director, starring , runTime} = movie;

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
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header isLight={false} isBreadcrumbs={false} isMiddleScreen={false}/>

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


            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">
            More like this
          </h2>

          <FilmsList
            movies = {movies.movies}
            countFilms={COUNT_RENDER_FILMS_LIST}
            isFavorite={false}
          />

        </section>

        <Footer />

      </div>
    </>
  );
}

export default Movie;
