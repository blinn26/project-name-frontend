import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';
import logout from '../../images/logout.svg';
import menuDark from '../../images/menu.svg';
import menuLight from '../../images/menuBlack.svg';
import whiteLog from '../../images/whiteLog.svg';

const Navigation = ({ isLoggedIn, handleLogOut, handleModalOpen }) => {
  const location = useLocation();
  const [menuVisible, setMenu] = useState(false);
  const isHomePage = location.pathname === '/';

  const showMenu = () => {
    setMenu(!menuVisible);
  };

  useEffect(() => {
    setMenu(false);
  }, [location]);

  let navigationClass = 'navigation';
  if (isHomePage) navigationClass += ' navigation_theme_transparent';
  else if (!menuVisible) navigationClass += ' navigation_theme_light';
  else navigationClass += ' navigation_theme_dark';

  return (
    <nav className={navigationClass}>
      <div className='navigation__logo-container'>
        <Link
          to='/'
          className='navigation__logo'>
          <p className='navigation__logo-text'>NewsExplorer</p>
        </Link>
        {menuVisible && (
          <button
            className='modal__button-close-menu'
            onClick={showMenu}></button>
        )}
      </div>
      <button
        className='navigation__hamburger-menu'
        onClick={showMenu}>
        <img
          src={menuVisible ? menuDark : menuLight}
          alt='Menu'
        />
      </button>
      <div className={`navigation__container ${menuVisible ? 'show__menu' : ''}`}>
        <div className='navigation__link-container'>
          <Link
            to='/'
            className={`navigation__home-link ${isLoggedIn ? 'text-black' : 'text-white'}`}>
            Home
            {location.pathname === '/' && <div className='navigation__home-link-underline' />}
          </Link>
        </div>
        {isLoggedIn && (
          <div className='navigation__link-container'>
            <Link
              to='/saved-news'
              className={`navigation__saved-news-link ${isLoggedIn ? 'text-black' : 'text-white'}`}>
              Saved articles
              {location.pathname === '/saved-news' && <div className='navigation__saved-news-link-underline' />}
            </Link>
          </div>
        )}
        {isLoggedIn ? (
          <>
            <button
              className='navigation__user'
              onClick={handleLogOut}>
              Elise{' '}
              <img
                src={logout}
                alt='Logout'
              />
            </button>
            <button
              className='navigation__log'
              onClick={handleLogOut}>
              <img
                src={whiteLog}
                alt='Logout'
              />
            </button>
          </>
        ) : (
          <button
            className='navigation__button sign-in'
            onClick={handleModalOpen}>
            Sign In
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
