import React from 'react';
import {Link} from 'react-router-dom';

const SIZES_AVATAR = {
  WIDTH: 63,
  HEIGHT: 63,
};

function UserInfo(): JSX.Element {
  const url = ' ';
  return (
    <ul className="user-block">
      <li className="user-block__item">
        <Link to={'/mylist'}>
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width={SIZES_AVATAR.WIDTH} height={SIZES_AVATAR.HEIGHT}/>
          </div>
        </Link>
      </li>
      <li className="user-block__item">
        <a href={url} className="user-block__link">Sign out</a>
      </li>
    </ul>
  );
}

export default UserInfo;
