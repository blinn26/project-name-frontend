import React from 'react';
import About from '../About/About';
import NewsCard from '../NewsCard/NewsCard';
import './Main.css';

const Main = ({ news, numNewsToShow, setNumNewsToShow, isLoggedIn }) => {
  return (
    <main>
      <About />
      <div>
        {news.slice(0, numNewsToShow).map((newsItem, index) => (
          <NewsCard key={index} newsItem={newsItem} isLoggedIn={isLoggedIn} />
        ))}
        <button className='main__show-more-button' onClick={() => setNumNewsToShow(numNewsToShow + 10)}>
          Show More
        </button>
      </div>
    </main>
  );
};

export default Main;
