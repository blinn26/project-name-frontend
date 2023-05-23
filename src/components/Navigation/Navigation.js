import React from 'react';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className='navigation'>
      <ul className='navigation__list'>
        <li className='navigation__item'>
          <a href='/'>Home</a>
        </li>
        <li className='navigation__item'>
          <a href='/saved-news'>Saved News</a>
        </li>
        {/* More navigation items here */}
      </ul>
    </nav>
  );
};

export default Navigation;
