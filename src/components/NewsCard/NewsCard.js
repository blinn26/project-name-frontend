import React, { useState } from 'react';
import './NewsCard.css';
import NewsCardPopup from '../NewsCardPopup/NewsCardPopup';

function formatDate(isoDate) {
  const date = new Date(isoDate);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString(undefined, options);
}

const NewsCard = ({ newsItem, isLoggedIn, onSaveNewsItem, onDeleteNewsItem, setIsModalOpen }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [showBookmarkPopup, setShowBookmarkPopup] = useState(false);
  const [showRemovePopup, setShowRemovePopup] = useState(false);

  if (!newsItem) {
    return <div>News item is not available</div>;
  }

  const { url, urlToImage, title, description, publishedAt, source } = newsItem;

  const sourceName = source ? source.name : 'Source name not available';

  const handleClick = () => isLoggedIn && setIsClicked(!isClicked);

  const handleBookmarkClick = () => {
    if (!isLoggedIn) {
      setShowBookmarkPopup(true);
      setTimeout(() => {
        setShowBookmarkPopup(false);
        if (setIsModalOpen) {
          setIsModalOpen(true);
        }
      }, 3000);
    }
  };

  const handleTrashClick = () => {
    if (showRemovePopup) {
      onDeleteNewsItem(newsItem);
      setShowRemovePopup(false);
    } else {
      setShowRemovePopup(true);
    }
  };

  return (
    <div className='news-card'>
      {urlToImage ? (
        <a
          href={url}
          target='_blank'
          rel='noreferrer'>
          <img
            className='news-card__image'
            src={urlToImage}
            alt={title || 'Image title not available'}
          />
        </a>
      ) : (
        <h3 className='news-card__placeholder'>Image could not be found</h3>
      )}
      <div className='news-card__content'>
        <p className='news-card__date'>{publishedAt ? formatDate(publishedAt) : 'Date not available'}</p>
        <a
          href={url}
          target='_blank'
          rel='noreferrer'
          className='news-card__title'>
          {title || 'Title not available'}
        </a>
        <p className='news-card__description'>{description || 'Description not available'}</p>
        <h4 className='news-card__source'>{sourceName}</h4>

        {isLoggedIn ? (
          <>
            <button
              className={`news-card__save ${isClicked ? 'news-card__save-clicked' : ''}`}
              onClick={() => {
                handleClick();
                onSaveNewsItem(newsItem);
              }}
            />
            <NewsCardPopup
              isOpen={showRemovePopup}
              text='Remove from saved'
            />
            <button
              className='news-card__delete'
              onClick={handleTrashClick}
            />
          </>
        ) : (
          <>
            <button
              className='news-card__save'
              onClick={handleBookmarkClick}
            />
            <NewsCardPopup
              isOpen={showBookmarkPopup}
              text='Sign in to save articles'
            />
          </>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
