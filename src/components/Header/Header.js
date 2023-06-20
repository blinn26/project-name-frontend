import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Navigation from '../Navigation/Navigation';
import { useLocation } from 'react-router-dom';
import './Header.css';

function Header({ handleModalOpen, handleSearchSubmit, isLoggedIn, news, theme, toggleTheme, handleLogOut }) {
  const location = useLocation();
  const isSavedNewsPage = location.pathname === '/saved-news';

  return (
    <header className={`header ${isSavedNewsPage ? '' : 'header__image'}`}>
      <Navigation
        toggleTheme={toggleTheme}
        theme={theme}
        handleModalOpen={handleModalOpen}
        isLoggedIn={isLoggedIn}
        handleLogOut={handleLogOut}
        news={news}
        themeChange={isSavedNewsPage ? 'light' : 'dark'}
      />
      {!isSavedNewsPage && (
        <section className='header__content'>
          <h1 className='header__title'>What's going on in the world?</h1>
          <p className='header__description'>
            Find the latest news on any topic and save them in your personal account.
          </p>
          <SearchForm handleSearchSubmit={handleSearchSubmit} />
        </section>
      )}
    </header>
  );
}

export default Header;
