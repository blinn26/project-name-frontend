import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header(props) {
  const { handleModalOpen, handleSearchSubmit, isLoggedIn, news, theme, toggleTheme, handleLogOut } = props;

  return (
    <header className={`header ${isLoggedIn ? '' : 'header_image'}`}>
      <Navigation
        toggleTheme={toggleTheme}
        theme={theme}
        handleModalOpen={handleModalOpen}
        isLoggedIn={isLoggedIn}
        handleLogOut={handleLogOut}
        news={news}
      />
      <SearchForm handleSearchSubmit={handleSearchSubmit} />
    </header>
  );
}

export default Header;
