import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';
import logout from '../images/logout.svg';
import menu from '../images/menu.svg'; // Import the hamburger menu icon

const Navigation = ({ isLoggedIn, handleLogOut, handleModalOpen, themeChange }) => {
  const location = useLocation();
  const textColorClass = isLoggedIn ? 'text-black' : 'text-white';
  const [menuVisible, setMenu] = useState(false);
  const showMenu = () => setMenu(!menuVisible);
  return (
    <nav
      className={`navigation ${menuVisible ? 'navigation_mobile' : ''}`}
      data-theme={themeChange}>
      <div className='navigation__logo'>
        <p className='navigation__logo-text'>NewsExplorer</p>
      </div>
      <div className='navigation__hamburger-menu'>
        <img
          src={menu}
          alt='Menu'
          onClick={showMenu}></img>
        {/* Use the hamburger menu icon here */}
      </div>
      <div className={`navigation__wrapper ${menuVisible ? 'show__menu' : ''}`}>
        <Link
          to='/'
          className={`navigation__home-link ${textColorClass}`}>
          <p className='navigation__home-link-text'>Home</p>
          {location.pathname === '/' && <div className='navigation__home-link-underline'></div>}
        </Link>

        {isLoggedIn && (
          <Link
            to='/saved-news'
            className={`navigation__saved-news-link ${textColorClass}`}>
            Saved articles
            {location.pathname === '/saved-news' && <div className='navigation__saved-news-link-underline'></div>}
          </Link>
        )}

        {isLoggedIn ? (
          <button
            className='navigation__user'
            onClick={handleLogOut}>
            Ben{' '}
            <img
              src={logout}
              alt='Logout'></img>
          </button>
        ) : (
          <button
            className='navigation__button signIn'
            onClick={handleModalOpen}>
            Sign In
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
