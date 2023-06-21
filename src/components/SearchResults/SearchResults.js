import React, { useEffect } from 'react';
import NewsCard from '../NewsCard/NewsCard';
import Preloader from '../Preloader/Preloader';
import notFoundImg from '../../images/ImageNotFound.svg';

const SearchResults = ({
  news,
  onSaveNewsItem,
  onDeleteNewsItem,
  isLoggedIn,
  isLoading,
  isError,
  handleModalOpen,
  numNewsToShow,
  setNumNewsToShow,
  isSavedRoute,
}) => {
  const handleClickShowMore = () => {
    setNumNewsToShow((prevNumNewsToShow) => {
      return prevNumNewsToShow + 3;
    });
  };

  useEffect(() => {
    console.log('Number of news items:', news.length);
    console.log('News items:', news);
  }, [news]);

  return (
    <section className={`news-container ${isLoading && 'news-container__preloader'}`}>
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
      ) : (
        <>
          {news.length > 0 && !isSavedRoute && <h2 className='search-results-title'>Search Results</h2>}
          {news.length === 0 ? (
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
                {news.slice(0, numNewsToShow).map((newsItem, index) => {
                  return (
                    <NewsCard
                      className='news-card'
                      key={index}
                      newsItem={newsItem}
                      onSaveNews={onSaveNewsItem}
                      onDeleteNewsItem={onDeleteNewsItem}
                      isLoggedIn={isLoggedIn}
                      handleModalOpen={handleModalOpen}
                    />
                  );
                })}
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
        </>
      )}
    </section>
  );
};

export default SearchResults;
