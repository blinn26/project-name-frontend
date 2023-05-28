import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

const NewsCardList = ({ news, isLoggedIn }) => {
  console.log('Rendering NewsCardList with news:', news);
  if (!news) {
    return <p>Loading...</p>;
  }

  return (
    <div className='news-card__list'>
      <h2 className='news-card__title'>News</h2>
      {news.map((item, index) => (
        <NewsCard key={index} newsItem={item} isLoggedIn={isLoggedIn} />
      ))}
    </div>
  );
};

export default NewsCardList;
