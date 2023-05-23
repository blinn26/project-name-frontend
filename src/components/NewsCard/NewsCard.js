import React from 'react';
import './NewsCard.css';

const NewsCard = () => {
  return (
    <div className='news-card'>
      <h2 className='news-card__title'>News Title</h2>
      <img className='news-card__image' src='url-to-image' alt='news' />
      <p className='news-card__content'>News content...</p>
    </div>
  );
};

export default NewsCard;
