import React from 'react';
import About from '../About/About';
import NewsCard from '../NewsCard/NewsCard';
import './Main.css';
import Preloader from '../Preloader/Preloader';

const Main = ({ news, numNewsToShow, setNumNewsToShow, isLoggedIn }) => {
  function renderNewsCards() {
    return news.slice(0, numNewsToShow).map((newsItem, index) => (
      <NewsCard
        className='news-card'
        key={index}
        newsItem={newsItem}
        isLoggedIn={isLoggedIn}
      />
    ));
  }

  function renderMoreNewsToShowCards() {
    return (
      numNewsToShow < news.length && (
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
      <About />
      <div className='news-container'>
        {news.length === 0 ? <Preloader /> : renderNewsCards()}
        {news.length === 0 ? <></> : renderMoreNewsToShowCards()}
      </div>
    </main>
  );
};

export default Main;
