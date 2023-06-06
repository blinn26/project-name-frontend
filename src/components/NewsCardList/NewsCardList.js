import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

const NewsCardList = ({ news, isLoggedIn, onSaveNews, onDeleteNewsItem }) => {
  console.log(onDeleteNewsItem);
  if (!news) {
    return <p>Loading...</p>;
  }

  return (
    <div className='news-card__list'>
      <h2 className='news-card__title'>News</h2>
      {isLoggedIn &&
        news.map((item, index) => (
          <NewsCard
            className='news-card'
            key={index}
            newsItem={item}
            onSaveNews={onSaveNews}
            onDeleteNewsItem={onDeleteNewsItem}
          />
        ))}
    </div>
  );
};

export default NewsCardList;
