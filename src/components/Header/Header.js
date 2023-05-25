import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Navigation from '../Navigation/Navigation';

const Header = ({ onLoginClick, handleSearchSubmit, isLoggedIn, isHomeActive }) => {
  return (
    <header className='header'>
      <Navigation onLoginClick={onLoginClick} isLoggedIn={isLoggedIn} isHomeActive={isHomeActive} />
      <SearchForm handleSearchSubmit={handleSearchSubmit} />
    </header>
  );
};

export default Header;
