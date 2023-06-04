import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NewsCard.css';
import PopupWithForm from '../NewsCardPopup/NewsCardPopup';

function formatDate(isoDate) {
  const date = new Date(isoDate);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString(undefined, options);
}

const NewsCard = ({ newsItem, isLoggedIn, onSaveNewsItem, onDeleteNewsItem }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  if (!newsItem) {
    return <div>News item is not available</div>;
  }

  const { url, urlToImage, title, description, publishedAt, source } = newsItem;

  const sourceName = source ? source.name : 'Source name not available';

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleClick = () => isLoggedIn && setIsClicked(!isClicked);

  return (
    <div className='news-card'>
      <Link
        to={url}
        className='news-card__link'>
        {urlToImage ? (
          <img
            className='news-card__image'
            src={urlToImage}
            alt={title || 'Image title not available'}
          />
        ) : (
          <h3 className='news-card__placeholder'>Image could not be found</h3>
        )}
      </Link>
      <div className='news-card__content'>
        <p className='news-card__date'>{publishedAt ? formatDate(publishedAt) : 'Date not available'}</p>
        <h3 className='news-card__title'>{title || 'Title not available'}</h3>
        <p className='news-card__description'>{description || 'Description not available'}</p>
        <h4 className='news-card__source'>{sourceName}</h4>

        {isLoggedIn ? (
          <>
            <button
              className={`news-card__save ${isClicked ? 'news-card__save-clicked' : ''}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => {
                handleClick();
                onSaveNewsItem(newsItem);
              }}
            />
            <PopupWithForm
              isOpen={isHovered}
              onClose={handleMouseLeave}
              text='Remove from saved'
            />
            <button
              className='news-card__delete'
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => onDeleteNewsItem(newsItem)}
            />
          </>
        ) : (
          <>
            <button
              className='news-card__save'
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleClick}
            />
            <PopupWithForm
              isOpen={isHovered}
              onClose={handleMouseLeave}
              text='Sign in to save articles'
            />
          </>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
