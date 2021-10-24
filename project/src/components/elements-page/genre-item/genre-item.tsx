import {GenreProps} from '../../../types/genre';

type GenreItemProps = {
  genre: GenreProps,
  changeGenre: (nameGenre: string) => void;
}

function GenreItem(props: GenreItemProps): JSX.Element {
  const {name, isActive} = props.genre;

  function handleClickGenreItem():void {
    props.changeGenre(name);
  }

  return (
    <li className={`catalog__genres-item ${isActive ? 'catalog__genres-item--active' : ' '}`} onClick={handleClickGenreItem}>
      <p className="catalog__genres-text" >{name}</p>
    </li>
  );
}

export default GenreItem;
