import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header(props) {
  const { handleModalOpen, handleSearchSubmit, toggleTheme, isLoggedIn, setLogin, theme } = props;

  return (
    <header className='header'>
      <Navigation
        handleModalOpen={handleModalOpen}
        toggleTheme={toggleTheme}
        isLoggedIn={isLoggedIn}
        setLogin={setLogin}
        theme={theme}
      />
      <SearchForm handleSearchSubmit={handleSearchSubmit} />
    </header>
  );
}

export default Header;
