import React, { useState } from 'react';
import './NewsCard.css';

// Define formatDate function here
function formatDate(isoDate) {
  const date = new Date(isoDate);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString(undefined, options);
}

const NewsCard = ({ newsItem, isLoggedIn, onSaveNewsItem }) => {
  const [isShown, setIsShown] = useState(false);

  const handleMouseEnter = () => {
    setIsShown(true);
  };

  const handleMouseLeave = () => {
    setIsShown(false);
  };

  return (
    <div
      className='news-card'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      {newsItem.urlToImage && (
        <img
          className='news-card__image'
          src={newsItem.urlToImage}
          alt={newsItem.title}
        />
      )}
      <p className='card__date'>{formatDate(newsItem.publishedAt)}</p>
      <h3 className='card__title'>{newsItem.title}</h3>
      <p className='card__description'>{newsItem.description}</p>
      <h4 className='card__source'>{newsItem.source.name}</h4>
      {isLoggedIn && isShown && (
        <button
          className='news-card__save'
          onClick={() => onSaveNewsItem(newsItem)}>
          Save Article
        </button>
      )}
      {!isLoggedIn && isShown && <p>Sign in to save articles</p>}
    </div>
  );
};

export default NewsCard;
