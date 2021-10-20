import {Link} from 'react-router-dom';

type BreadcrumbsProps = {
  id: string;
  name: string;
}

function Breadcrumbs(props:BreadcrumbsProps): JSX.Element {
  const {id, name} = props;
  return (
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
  );
}

export default Breadcrumbs;
