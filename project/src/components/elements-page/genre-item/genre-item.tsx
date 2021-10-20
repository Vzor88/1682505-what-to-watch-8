import {GenreProps} from '../../../types/genre';

function GenreItem(props: GenreProps): JSX.Element {
  const {name, isActive} = props;
  const url = ' ';

  return (
    <li className={`catalog__genres-item ${isActive ? 'catalog__genres-item--active' : ' '}`}>
      <a href={url} className="catalog__genres-link">{name}</a>
    </li>
  );
}

export default GenreItem;
