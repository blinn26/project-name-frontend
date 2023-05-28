import React from 'react';
import './Navigation.css';
import Home from '../images/Home.png';
import logo from '../images/NewsExplorer.png';
import bgLine from '../images/bgLine.png';

const Navigation = ({ handleModalOpen }) => {
  return (
    <>
      <nav className='navigation'>
        <img className='navigation__logo' src={logo} alt='Logo' />
        <img className='navigation__line' src={bgLine} alt='Background Line' />
        <ul className='navigation__list'>
          <li className='navigation__item'></li>
          <li className='navigation__item'>
            <a className='navigation__link' href='/saved-news'>
              Saved-articles
            </a>
          </li>
          {/* More navigation items here */}
        </ul>
        <a href='/' className='navigation__home'>
          <img src={Home} alt='Home' className='navigation__home-icon' />
        </a>
        <button className='header__sign-in-button rectangle signIn' onClick={handleModalOpen}>
          Sign In
        </button>
      </nav>
      <div className='navigation__background'></div>
    </>
  );
};

export default Navigation;
