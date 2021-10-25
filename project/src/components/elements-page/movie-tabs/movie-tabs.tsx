/* eslint-disable no-console */
import {MovieProps} from '../../../types/movie';
import React, {useState} from 'react';
import MovieTabsContent from './movie-tabs-content';

const itemsTabs = [
  {title: 'Overview'},
  {title: 'Details'},
  {title: 'Reviews'},
];

type MovieTabsProps = {
  movie:MovieProps;
}

function MovieTabs(movie: MovieTabsProps): JSX.Element {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="film-card__tabs">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {itemsTabs.map((item:{title:string}, index:number) => (
            <li
              className={`film-nav__item ${index === activeTab ? 'film-nav__item--active' : ' '}`}
              data-index={index}
              key={item.title}
              onClick={(event:React.MouseEvent<HTMLLIElement>) => {
                setActiveTab(Number(event.currentTarget.dataset.index));
              }}
            >
              <p className="film-nav__link">{item.title}</p>
            </li>
          ))}
        </ul>
      </nav>

      <MovieTabsContent movie={movie.movie} index={activeTab} />

    </div>

  );
}

export default MovieTabs;
