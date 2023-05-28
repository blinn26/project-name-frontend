import React, { useState } from 'react';
import './NewsCard.css';

const NewsCard = ({ newsItem, isLoggedIn }) => {
  const [isShown, setIsShown] = useState(false);

  const handleMouseEnter = () => {
    setIsShown(true);
  };

  const handleMouseLeave = () => {
    setIsShown(false);
  };

  return (
    <div className='news-card' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <p className='card__date'>{newsItem.publishedAt.slice(0, 10)}</p>
      <h3 className='card__title'>{newsItem.title}</h3>
      <p className='card__description'>{newsItem.description}</p>
      <h4 className='card__source'>{newsItem.source.name}</h4>
      {newsItem.urlToImage && <img className='news-card__image' src={newsItem.urlToImage} alt={newsItem.title} />}
      {isLoggedIn && isShown && <button className='news-card__save'>Save Article</button>}
      {!isLoggedIn && isShown && <p>Sign in to save articles</p>}
    </div>
  );
};

export default NewsCard;
