import React, { useState } from 'react';
import './NewsCard.css';
import NewsCardPopup from '../NewsCardPopup/NewsCardPopup';

function formatDate(isoDate) {
  const date = new Date(isoDate);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString(undefined, options);
}

const NewsCard = ({ newsItem, isLoggedIn, onSaveNews, handleModalOpen, onDeleteNewsItem, savedNews }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [showBookmarkPopup, setShowBookmarkPopup] = useState(false);
  const [showRemovePopup, setShowRemovePopup] = useState(false);

  const keyword = newsItem && newsItem.title ? newsItem.title.split(' ')[0] : 'No keyword';

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
        handleModalOpen(true);
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

  const handleSaveClick = () => {
    handleClick();
    onSaveNews({ ...newsItem, keyword });
  };

  return (
    <article className='news-card'>
      {urlToImage ? (
        <a
          href={url}
          target='_blank'
          rel='noreferrer'>
          <img
            className='news-card__image'
            src={urlToImage}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'default_image_url';
            }}
            alt={title || 'Image title not available'}
          />
        </a>
      ) : (
        <h3 className='news-card__placeholder'>No Image Found</h3>
      )}
      <div className='news-card__content'>
        <div>
          <p className='news-card__date'>{publishedAt ? formatDate(publishedAt) : 'Date not available'}</p>
          <a
            href={url}
            target='_blank'
            rel='noreferrer'
            className='news-card__title'>
            {title || 'Title not available'}
          </a>
          <p className='news-card__description'>{description || 'Description not available'}</p>
        </div>
        <h4 className='news-card__source'>{sourceName}</h4>

        {isLoggedIn ? (
          <>
            <NewsCardPopup
              isOpen={showRemovePopup}
              text='Remove from saved'
            />
            <button
              className='news-card__delete'
              onClick={handleTrashClick}
            />
            <button className='news-card__keywords'>{keyword}</button>
            {savedNews ? (
              <></>
            ) : (
              <button
                className={`news-card__save ${isClicked ? 'news-card__save-clicked' : ''}`}
                onClick={handleSaveClick}
              />
            )}
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
    </article>
  );
};

export default NewsCard;
