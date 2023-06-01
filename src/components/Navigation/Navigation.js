import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';
import logo from '../images/NewsExplorer.png';
import logout from '../images/logout.svg';
import homeImg from '../images/Home.png';

const Navigation = ({ isLoggedIn, handleLogOut, handleModalOpen }) => {
  const location = useLocation();
  const textColorClass = isLoggedIn ? 'text-black' : 'text-white';

  return (
    <nav className='navigation' data-theme={isLoggedIn ? 'light' : 'dark'}>
      <img className='navigation__logo' src={logo} alt='Logo' />
      <div className='navigation__wrapper'>
        <Link to='/' className={`navigation__home-link ${textColorClass}`}>
          {!isLoggedIn ? (
            <img className='navigation__home-link-image' src={homeImg} alt='Home' />
          ) : (
            <p className='navigation__home-link-text'>Home</p>
          )}
          {!isLoggedIn && location.pathname === '/' && <div className='navigation__home-link-underline'></div>}
        </Link>

        {isLoggedIn && (
          <Link to='/saved-news' className={`navigation__saved-news-link ${textColorClass}`}>
            Saved articles
            {location.pathname === '/saved-news' && <div className='navigation__saved-news-link-underline'></div>}
          </Link>
        )}

        {isLoggedIn ? (
          <button className='navigation__user' onClick={handleLogOut}>
            Elise <img src={logout}></img>
          </button>
        ) : (
          <button className='navigation__button signIn' onClick={handleModalOpen}>
            Sign In
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
