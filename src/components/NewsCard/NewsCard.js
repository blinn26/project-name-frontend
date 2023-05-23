import React from 'react';
import './NewsCard.css';

const NewsCard = ({ newsItem }) => {
  return (
    <div className='news-card'>
      <h2 className='news-card__title'>{newsItem.title}</h2>
      <p className='news-card__info'>{newsItem.description}</p>
      {/* Additional content goes here */}
    </div>
  );
};

export default NewsCard;
