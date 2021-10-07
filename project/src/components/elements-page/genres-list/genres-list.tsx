import {GENRES_LIST} from '../../../consts';
import React from 'react';

type GenresItemProps = {
  name: string;
  active: boolean;
}

function GenreItem(props:GenresItemProps): JSX.Element {
  const {name, active} = props;
  const url = ' ';
  if(active){
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

function GenresList(): JSX.Element {
  return (
    <ul className="catalog__genres-list">
      {GENRES_LIST.map((element) => <GenreItem name={element.name} key={element.name} active={element.isActive} />)}
    </ul>
  );
}

export default GenresList;
