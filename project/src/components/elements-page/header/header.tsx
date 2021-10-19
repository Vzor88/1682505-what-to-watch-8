import Logo from '../logo/logo';
import UserInfo from '../user-info/user-info';
import {Link} from 'react-router-dom';

type HeaderProps = {
  isLight: boolean;
  isBreadcrumbs: boolean;
  isMiddleScreen: boolean;
  id?: string;
  name?: string;
  text?: string;
}

function Header(props:HeaderProps): JSX.Element {
  const {isLight, isBreadcrumbs, isMiddleScreen, id, name, text} = props;
  return (
    <header className={`page-header ${isBreadcrumbs ? ' ' : 'film-card__head'} ${isMiddleScreen ? 'user-page__head' : ' '}`}>

      <Logo isLight={isLight}/>
      {
        isBreadcrumbs
          ?
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
          : ' '
      }
      {
        isMiddleScreen
          ?
          <h1 className="page-title user-page__title">{text}</h1>
          : ' '
      }
      <UserInfo />

    </header>
  );
}

export default Header;
