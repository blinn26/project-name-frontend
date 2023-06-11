import React from 'react';
import About from '../About/About';
import SearchResults from '../SearchResults/SearchResults';
import './Main.css';

const Main = ({ news, onSaveNewsItem, onDeleteNewsItem, isLoggedIn, isLoading, isError, handleModalOpen }) => {
  return (
    <main className='main'>
      <SearchResults
        news={news}
        onSaveNewsItem={onSaveNewsItem}
        onDeleteNewsItem={onDeleteNewsItem}
        isLoggedIn={isLoggedIn}
        isLoading={isLoading}
        isError={isError}
        handleModalOpen={handleModalOpen}
      />
      <About />
    </main>
  );
};

export default Main;
