import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Navigation from '../Navigation/Navigation';
import './Header.css';

const Header = ({ handleModalOpen, handleSearchSubmit }) => {
  return (
    <header className='header'>
      <Navigation handleModalOpen={handleModalOpen} /> {/* Navigation component is now here */}
      <SearchForm handleSearchSubmit={handleSearchSubmit} />
    </header>
  );
};

export default Header;
