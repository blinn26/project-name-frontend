import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';
import logout from '../../images/logout.svg';
import whiteLog from '../../images/whiteLog.svg';
import closeHamburger from '../../images/closeButton.svg';
import closeburgerDark from '../../images/closeButtonDark.svg';
import closeburgerLight from '../../images/closeButtonLight.svg';

const Navigation = ({ isLoggedIn, handleLogOut, handleModalOpen, themeChange }) => {
  const location = useLocation();
  const textColorClass = isLoggedIn ? 'text-black' : 'text-white';
  const [menuVisible, setMenu] = useState(false);
  const [menuBackground, setMenuBackground] = useState(false);

  const showMenu = () => {
    setMenu(!menuVisible);
    setMenuBackground(!menuBackground);
  };

  const isHomePage = location.pathname === '/';
  const logoutIcon = themeChange === 'light' ? whiteLog : logout;

  const [menuIcon, setMenuIcon] = useState(closeburgerDark);
  const [closeIcon, setCloseIcon] = useState(closeHamburger);

  const [navigationBackground, setNavigationBackground] = useState('navigation');

  useEffect(() => {
    let navBackground = 'navigation';
    if (isHomePage && !menuBackground) {
      navBackground += ' navigation__transparent';
    } else if (menuBackground) {
      navBackground += ' navigation__dark';
    } else {
      navBackground += ' navigation__light';
    }
    setNavigationBackground(navBackground);

    setMenuIcon(themeChange === 'light' && isLoggedIn ? closeburgerLight : closeburgerLight);
    setCloseIcon(themeChange === 'dark' ? closeHamburger : menuIcon);
  }, [isHomePage, menuBackground, themeChange, isLoggedIn]);

  return (
    <nav
      className={`${navigationBackground} ${menuVisible ? 'navigation_mobile' : ''}`}
      data-theme={themeChange}>
      <div className='navigation__logo'>
        <p className='navigation__logo-text'>NewsExplorer</p>
      </div>
      {menuVisible ? (
        <Link
          to='/'
          className='navigation__hamburger-menu'
          onClick={showMenu}>
          <img
            src={closeIcon}
            alt='Menu'
            className='navigation__hamburger-close-button'
          />
        </Link>
      ) : (
        <Link
          to='/'
          className='navigation__hamburger-menu'
          onClick={showMenu}>
          <img
            src={menuIcon}
            alt='Menu'
            className='navigation__hamburger-icon'
          />
        </Link>
      )}
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
          <>
            <button
              className='navigation__user'
              onClick={handleLogOut}>
              Elise{' '}
              <img
                src={logoutIcon}
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
