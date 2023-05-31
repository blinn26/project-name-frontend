import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header(props) {
  const { handleModalOpen, handleSearchSubmit, isLoggedIn, setLogin, news, theme, toggleTheme } = props;

  return (
    <header className='header'>
      <Navigation
        toggleTheme={toggleTheme}
        theme={theme}
        handleModalOpen={handleModalOpen}
        isLoggedIn={isLoggedIn}
        setLogin={setLogin}
        news={news}
      />
      <SearchForm handleSearchSubmit={handleSearchSubmit} />
    </header>
  );
}

export default Header;
