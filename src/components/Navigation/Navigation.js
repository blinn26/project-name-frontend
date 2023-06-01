import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import logo from '../images/NewsExplorer.png';

const Navigation = ({ isLoggedIn, handleLogOut, handleModalOpen }) => {
  const textColorClass = isLoggedIn ? 'text-black' : 'text-white';
  return (
    <nav className='navigation' data-theme={isLoggedIn ? 'light' : 'dark'}>
      <img className='navigation__logo' src={logo} alt='Logo' />

      <Link to='/' className={`navigation__home-link ${textColorClass}`}>
        <p className='navigation__home-link-text'>Home</p>
        {!isLoggedIn && <div className='navigation__home-link-underline'></div>}
      </Link>

      {isLoggedIn && (
        <Link to='/saved-news' className={`navigation__saved-news-link ${textColorClass}`}>
          Saved articles
          <div className='navigation__saved-news-link-underline'></div>
        </Link>
      )}

      {isLoggedIn ? (
        <div className='navigation__user'>
          <p className='navigation__username'>Username</p>
          <button onClick={handleLogOut} className='navigation__logout'>
            Log Out
          </button>
        </div>
      ) : (
        <button className='navigation__button signIn' onClick={handleModalOpen}>
          Sign In
        </button>
      )}
    </nav>
  );
};

export default Navigation;
