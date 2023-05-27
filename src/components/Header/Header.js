// Header.js
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import './Header.css';

const Header = ({ handleSearchSubmit }) => {
  return (
    <header className='header'>
      <div className='header__middle'>
        <SearchForm handleSearchSubmit={handleSearchSubmit} />
      </div>
    </header>
  );
};

export default Header;
