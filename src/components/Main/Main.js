import React from 'react';
import About from '../About/About';
import NewsCard from '../NewsCard/NewsCard';
import './Main.css';
import Preloader from '../Preloader/Preloader';
import spinningCircle from '../images/Ellipse.png';
import notFoundImg from '../images/ImageNotFound.png';

const Main = ({ news, numNewsToShow, setNumNewsToShow, onSaveNews, isLoggedIn, isLoading, isError }) => {
  function renderNewsCards() {
    if (isLoading) {
      <Preloader />;
      return (
        <div className='spinner-container'>
          <img
            className='circle-preloader'
            src={spinningCircle}
            alt='Spinning Circle'
          />
          <h3></h3>
          <p>Searching for news...</p>
        </div>
      );
    } else if (isError) {
      return <Preloader />;
    } else if (news.length === 0) {
      return (
        <div className='no-image-container'>
          <img
            className='no-image-image'
            src={notFoundImg}
            alt='Not found'
          />
          <h3 className='no-image-title'>Nothing found</h3>
          <p className='no-image-text'>Sorry, we encountered an error while processing your request.</p>
        </div>
      );
    } else {
      return news.slice(0, numNewsToShow).map((newsItem, index) => (
        <NewsCard
          className='news-card'
          key={index}
          newsItem={newsItem}
          onSaveNews={onSaveNews}
          isLoggedIn={isLoggedIn}
        />
      ));
    }
  }

  function renderMoreNewsToShowCards() {
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
  }

  return (
    <main className='main'>
      <div className={`news-container ${news.length === 0 ? 'center-contents' : ''}`}>
        {renderNewsCards()}
        {renderMoreNewsToShowCards()}
      </div>
      <About />
    </main>
  );
};

export default Main;
