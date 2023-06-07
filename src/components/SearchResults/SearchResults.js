import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import Preloader from '../Preloader/Preloader';
import notFoundImg from '../images/ImageNotFound.png';

const SearchResults = ({
  news,
  numNewsToShow,
  onSaveNewsItem,
  onDeleteNewsItem,
  isLoggedIn,
  isLoading,
  isError,
  handleModalOpen,
}) => {
  return (
    <div className='news-container'>
      {isLoading ? (
        <Preloader />
      ) : isError ? (
        <div className='no-image-container'>
          <img
            className='no-image-image'
            src={notFoundImg}
            alt='Not found'
          />
          <h3 className='no-image-title'>Sorry, something went wrong.</h3>
          <p className='no-image-text'>Please try again later.</p>
        </div>
      ) : news.length === 0 ? (
        <div className='no-image-container'>
          <img
            className='no-image-image'
            src={notFoundImg}
            alt='Not found'
          />
          <h3 className='no-image-title'>Nothing found</h3>
          <p className='no-image-text'>Please try again with different keywords.</p>
        </div>
      ) : (
        news.slice(0, numNewsToShow).map((newsItem, index) => (
          <NewsCard
            className='news-card'
            key={index}
            newsItem={newsItem}
            onSaveNews={onSaveNewsItem} // Updated prop name
            onDeleteNews={onDeleteNewsItem} // Updated prop name
            isLoggedIn={isLoggedIn}
            handleModalOpen={handleModalOpen}
          />
        ))
      )}
    </div>
  );
};

export default SearchResults;
