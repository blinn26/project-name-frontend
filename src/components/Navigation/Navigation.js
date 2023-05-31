import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import logo from '../images/NewsExplorer.png';
import homeImage from '../images/HomeWhite.png';

const Navigation = ({ handleModalOpen, isLoggedIn, handleLogOut }) => {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    setActiveTab(isLoggedIn ? 'article' : 'home');
  }, [isLoggedIn]);

  return (
    <nav className='navigation' data-theme={isLoggedIn ? 'light' : 'dark'}>
      <img className='navigation__logo' src={logo} alt='Logo' />
      <ul className='navigation__list'>
        <li className={`navigation__item ${activeTab === 'home' ? 'active' : ''}`}>
          <Link to='/'>
            <img src={homeImage} alt='Home' className='navigation__home-image' />
          </Link>
        </li>
        {isLoggedIn && (
          <li className={`navigation__item ${activeTab === 'article' ? 'active' : ''}`}>
            <Link to='/saved-news'>Saved articles</Link>
          </li>
        )}
      </ul>

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
