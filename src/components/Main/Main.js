import React from 'react';
import About from '../About/About';
import SearchResults from '../SearchResults/SearchResults';
import './Main.css';
import { useLocation } from 'react-router-dom';

const Main = ({
  news,
  onSaveNewsItem,
  onDeleteNewsItem,
  isLoggedIn,
  isLoading,
  isError,
  handleModalOpen,
  hasSearched,
  numNewsToShow,
  setNumNewsToShow,
}) => {
  const location = useLocation();

  return (
    <main className='main'>
      {hasSearched && (
        <SearchResults
          news={news}
          onSaveNewsItem={onSaveNewsItem}
          onDeleteNewsItem={onDeleteNewsItem}
          isLoggedIn={isLoggedIn}
          isLoading={isLoading}
          isError={isError}
          handleModalOpen={handleModalOpen}
          numNewsToShow={numNewsToShow}
          setNumNewsToShow={setNumNewsToShow}
          isSavedRoute={location.pathname === '/saved-news'}
        />
      )}
      <About />
    </main>
  );
};

export default Main;
