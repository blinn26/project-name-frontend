import React from 'react';
import About from '../About/About';
import NewsCard from '../NewsCard/NewsCard';
import './Main.css';
import Preloader from '../Preloader/Preloader';
import notFoundImg from '../images/ImageNotFound.png';

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
}) => {
  const renderNewsCards = () => {
    if (isLoading) {
      return <Preloader />;
    } else if (isError) {
      return (
        <div className='no-image-container'>
          <img
            className='no-image-image'
            src={notFoundImg}
            alt='Not found'
          />
          <h3 className='no-image-title'>Sorry, something went wrong.</h3>
          <p className='no-image-text'>Please try again later.</p>
        </div>
      );
    } else if (news.length === 0 && hasSearched) {
      return (
        <div className='no-image-container'>
          <img
            className='no-image-image'
            src={notFoundImg}
            alt='Not found'
          />
          <h3 className='no-image-title'>Nothing found</h3>
          <p className='no-image-text'>Please try again with different keywords.</p>
        </div>
      );
    } else {
      return news.slice(0, numNewsToShow).map((newsItem, index) => (
        <NewsCard
          className='news-card'
          key={index}
          newsItem={newsItem}
          onSaveNewsItem={onSaveNewsItem}
          onDeleteNewsItem={onDeleteNewsItem}
          isLoggedIn={isLoggedIn}
        />
      ));
    }
  };

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
      <div className={`news-container ${news.length === 0 && hasSearched ? 'center-contents' : ''}`}>
        {' '}
        {/* Only center contents if user has searched */}
        {renderNewsCards()}
        {renderMoreNewsToShowCards()}
      </div>
      <About />
    </main>
  );
};

export default Main;
