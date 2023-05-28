import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import './Header.css';

const Header = ({ handleSearchSubmit }) => {
  const title = "What's going on in the world?";
  return (
    <header className='header'>
      <div className='header__background-image'>
        <h1 className='header__title'>{title}</h1>
        <div className='header__middle'>
          <SearchForm handleSearchSubmit={handleSearchSubmit} />
        </div>
      </div>
    </header>
  );
};

export default Header;
