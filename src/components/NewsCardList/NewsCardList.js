import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

const NewsCardList = ({ news }) => {
  return (
    <div className='news-card__list'>
      <h2 className='news-card__title'>News</h2>
      {news.map((item, index) => (
        <NewsCard key={index} newsItem={item} />
      ))}
    </div>
  );
};

export default NewsCardList;
