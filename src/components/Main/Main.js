import React from 'react';
import About from '../About/About';
import NewsCard from '../NewsCard/NewsCard';
import './Main.css';

const Main = ({ news, numNewsToShow, setNumNewsToShow, isLoggedIn }) => {
  return (
    <main className='main'>
      <About />
      <div className='news-container'>
        {news.slice(0, numNewsToShow).map((newsItem, index) => (
          <NewsCard className='news-card' key={index} newsItem={newsItem} isLoggedIn={isLoggedIn} />
        ))}
        {numNewsToShow < news.length && (
          <button className='main__show-more-button' onClick={() => setNumNewsToShow(numNewsToShow + 3)}>
            Show More
          </button>
        )}
      </div>
    </main>
  );
};

export default Main;
