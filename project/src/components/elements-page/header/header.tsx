import Logo from '../logo/logo';
import UserInfo from '../user-info/user-info';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';

type HeaderProps = {
  isLight: boolean;
  isBreadcrumbs: boolean;
  isMiddleScreen: boolean;
  id: string;
  name: string;
  text: string;
}

function Header(props:HeaderProps): JSX.Element {
  const {isLight, isBreadcrumbs, isMiddleScreen, id, name, text} = props;
  return (
    <header className={`page-header ${isBreadcrumbs ? ' ' : 'film-card__head'} ${isMiddleScreen ? 'user-page__head' : ' '}`}>

      <Logo isLight={isLight}/>

      {isBreadcrumbs ? <Breadcrumbs id={id} name={name}/> : ' '}
      {isMiddleScreen ? <h1 className="page-title user-page__title">{text}</h1> : ' '}

      <UserInfo />

    </header>
  );
}

export default Header;
