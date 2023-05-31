import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import logo from '../images/NewsExplorer.png';
import homeImage from '../images/HomeWhite.png';

const Navigation = ({ isLoggedIn, handleLogOut, handleModalOpen }) => {
  return (
    <nav className='navigation' data-theme={isLoggedIn ? 'light' : 'dark'}>
      <img className='navigation__logo' src={logo} alt='Logo' />

      <Link to='/'>
        <img src={homeImage} alt='Home' className='navigation__home-image' />
      </Link>

      {isLoggedIn && <Link to='/saved-news'>Saved articles</Link>}

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
