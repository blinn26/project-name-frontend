import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Navigation from '../Navigation/Navigation';
import { useLocation } from 'react-router-dom';
import './Header.css';

function Header({ handleModalOpen, handleSearchSubmit, isLoggedIn, news, theme, toggleTheme, handleLogOut }) {
  return (
    <header className={`header ${useLocation().pathname === '/saved-news' ? '' : 'header_image'}`}>
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
