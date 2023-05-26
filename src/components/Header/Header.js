import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Navigation from '../Navigation/Navigation';
import logo from '../images/NewsExplorer.png';
import './Header.css';

const Header = ({ onLoginClick, handleSearchSubmit, isLoggedIn, isHomeActive, handleModalOpen }) => {
  return (
    <header className='header'>
      <div className='header__top'>
        <img className='header__logo' src={logo} alt='Logo' />

        <div className='header__navigation'>
          <Navigation onLoginClick={onLoginClick} isLoggedIn={isLoggedIn} isHomeActive={isHomeActive} />
          <button className='header__sign-in-button rectangle signIn' onClick={handleModalOpen}>
            Sign In
          </button>
        </div>
      </div>
      <div className='header__middle'>
        <SearchForm handleSearchSubmit={handleSearchSubmit} />
      </div>
    </header>
  );
};

export default Header;
