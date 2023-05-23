import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

const NewsCardList = ({ news }) => {
  return (
    <div className='news-card__list'>
      <h2 className='news-card__title'>News</h2>
      {news && news.length > 0 ? (
        news.map((item, index) => <NewsCard key={index} newsItem={item} />)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default NewsCardList;
