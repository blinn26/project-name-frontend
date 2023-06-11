import React, { useState } from 'react';
import NewsCard from '../NewsCard/NewsCard';
import Preloader from '../Preloader/Preloader';
import notFoundImg from '../images/ImageNotFound.png';

const SearchResults = ({ news, onSaveNewsItem, onDeleteNewsItem, isLoggedIn, isLoading, isError, handleModalOpen }) => {
  const [numNewsToShow, setNumNewsToShow] = useState(3);

  const handleClickShowMore = () => {
    setNumNewsToShow(numNewsToShow + 3);
  };

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
        <>
          <div className='news-card-container'>
            {news.slice(0, numNewsToShow).map((newsItem, index) => (
              <NewsCard
                className='news-card'
                key={index}
                newsItem={newsItem}
                onSaveNews={onSaveNewsItem}
                onDeleteNewsItem={onDeleteNewsItem}
                isLoggedIn={isLoggedIn}
                handleModalOpen={handleModalOpen}
              />
            ))}
          </div>
          {news.length > numNewsToShow && (
            <button
              className='main__show-more-button'
              onClick={handleClickShowMore}>
              Show More
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default SearchResults;
