import React from 'react';
import About from '../About/About';
import './Main.css';
import SearchResults from '../SearchResults/SearchResults';

const Main = ({
  news,
  numNewsToShow,
  setNumNewsToShow,
  onSaveNewsItem,
  onDeleteNewsItem,
  isLoggedIn,
  isLoading,
  isError,
  hasSearched,
  handleModalOpen,
}) => {
  const renderMoreNewsToShowCards = () => {
    return (
      numNewsToShow < news.length &&
      !isLoading &&
      !isError && (
        <button
          className='main__show-more-button'
          onClick={() => setNumNewsToShow(numNewsToShow + 3)}>
          Show More
        </button>
      )
    );
  };

  return (
    <main className='main'>
      {hasSearched && (
        <SearchResults
          news={news}
          numNewsToShow={numNewsToShow}
          onSaveNewsItem={onSaveNewsItem}
          onDeleteNewsItem={onDeleteNewsItem}
          isLoggedIn={isLoggedIn}
          isLoading={isLoading}
          isError={isError}
          handleModalOpen={handleModalOpen}
        />
      )}
      {renderMoreNewsToShowCards()}
      <About />
    </main>
  );
};

export default Main;
