import React, { useState } from 'react';
import './NewsCard.css';

// Define formatDate function here
function formatDate(isoDate) {
  const date = new Date(isoDate);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString(undefined, options);
}

const NewsCard = ({ newsItem, isLoggedIn, onSaveNewsItem, onDeleteNewsItem }) => {
  const [isShown, setIsShown] = useState(false);

  const handleMouseEnter = () => {
    setIsShown(true);
  };

  const handleMouseLeave = () => {
    setIsShown(false);
  };

  console.log(newsItem.title); // Log the title to the console

  return (
    <div
      className='news-card'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <div className='news-card__container'>
        {newsItem.urlToImage && (
          <img
            className='news-card__image'
            src={newsItem.urlToImage}
            alt={newsItem.title}
          />
        )}
        <div className='news-card__content'>
          <p className='news-card__date'>{formatDate(newsItem.publishedAt)}</p>
          <h3 className='news-card__title'>{newsItem.title}</h3>
          <p className='news-card__description'>{newsItem.description}</p>
          <h4 className='news-card__source'>{newsItem.source.name}</h4>
          {isLoggedIn && isShown && (
            <>
              <button
                className='news-card__save'
                onClick={() => onSaveNewsItem(newsItem)}>
                Save Article
              </button>
              <button
                className='news-card__delete'
                onClick={() => onDeleteNewsItem(newsItem)}>
                Delete Article
              </button>
            </>
          )}
          {!isLoggedIn && isShown && <p>Sign in to save articles</p>}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
