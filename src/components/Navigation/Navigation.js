// Navigation.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import logo from '../images/NewsExplorer.png';
import homeImage from '../images/Home.png';

const Navigation = ({ handleModalOpen, isLoggedIn, setLogin }) => {
  const [activeTab, setActiveTab] = useState('home');
  const [theme, setTheme] = useState('light'); // new state to handle theme

  useEffect(() => {
    setActiveTab(isLoggedIn ? 'article' : 'home');
  }, [isLoggedIn]);

  const toggleTheme = () => {
    // function to toggle theme
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <nav className='navigation' data-theme={theme}>
      <img className='navigation__logo' src={logo} alt='Logo' />
      <ul className='navigation__list'>
        <li className={`navigation__item ${activeTab === 'home' ? 'active' : ''}`}>
          <Link to='/'>
            <img src={homeImage} alt='Home' className='navigation__home-image' />
            Home
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
          <button onClick={() => setLogin(false)} className='navigation__logout'>
            Log Out
          </button>
        </div>
      ) : (
        <button className='navigation__button signIn' onClick={handleModalOpen}>
          Sign In
        </button>
      )}
      <button className='navigation__button' onClick={toggleTheme}>
        Toggle theme
      </button>
    </nav>
  );
};

export default Navigation;
