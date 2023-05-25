import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Navigation from '../Navigation/Navigation';

const Header = ({ onLoginClick, handleSearchSubmit, isLoggedIn, isHomeActive, handleModalOpen }) => {
  return (
    <header className='header'>
      <div className='header__top'>
        <Navigation onLoginClick={onLoginClick} isLoggedIn={isLoggedIn} isHomeActive={isHomeActive} />
      </div>
      <div className='header__middle'>
        <SearchForm handleSearchSubmit={handleSearchSubmit} />
      </div>
      <div className='header__bottom'>
        <button className='header__sign-in-button' onClick={handleModalOpen}>
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Header;
