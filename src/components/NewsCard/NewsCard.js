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
      <h2 className='news-card__title'>{newsItem.title}</h2>
      <p className='news-card__info'>{newsItem.description}</p>
      {newsItem.urlToImage && <img className='news-card__image' src={newsItem.urlToImage} alt={newsItem.title} />}
      {isLoggedIn && isShown && <button className='news-card__save'>Save Article</button>}
      {!isLoggedIn && isShown && <p>Sign in to save articles</p>}
    </div>
  );
};

export default NewsCard;
