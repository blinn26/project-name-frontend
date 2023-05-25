import React from 'react';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';

const Header = ({ onLoginClick, handleSearchSubmit, isLoggedIn, isHomeActive }) => {
  return (
    <header className='header'>
      <Navigation onLoginClick={onLoginClick} isLoggedIn={isLoggedIn} isHomeActive={isHomeActive} />
      <SearchForm handleSearchSubmit={handleSearchSubmit} />
    </header>
  );
};

export default Header;
