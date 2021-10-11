import React from 'react';
import {GenreProps} from '../../../types/genres';

function GenreItem(props:GenreProps): JSX.Element {
  const {name, isActive} = props;
  const url = ' ';
  if(isActive){
    return (
      <li className="catalog__genres-item catalog__genres-item--active">
        <a href={url} className="catalog__genres-link">{name}</a>
      </li>
    );
  } else {
    return (
      <li className="catalog__genres-item">
        <a href={url} className="catalog__genres-link">{name}</a>
      </li>
    );
  }
}

function GenresList(genres: {genres:GenreProps[]}): JSX.Element {
  return (
    <ul className="catalog__genres-list">
      {genres.genres.map((element) => <GenreItem name={element.name} key={element.name} isActive={element.isActive} />)}
    </ul>
  );
}

export default GenresList;
