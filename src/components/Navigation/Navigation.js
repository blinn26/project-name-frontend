import React from 'react';
import './Navigation.css';
import Home from '../images/Home.png';

const Navigation = () => {
  return (
    <nav className='navigation'>
      <ul className='navigation__list'>
        <li className='navigation__item'></li>
        <li className='navigation__item'>
          <a className='navigation__link' href='/'>
            <img src={Home} alt='Home' className='navigation__home-icon' />
          </a>
          <a className='navigation__link' href='/saved-news'>
            Saved News
          </a>
        </li>
        {/* More navigation items here */}
      </ul>
    </nav>
  );
};

export default Navigation;
