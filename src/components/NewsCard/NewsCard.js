import React from 'react';
import './NewsCard.css';

function formatDate(isoDate) {
  const date = new Date(isoDate);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString(undefined, options);
}

const NewsCard = ({ newsItem, isLoggedIn, onSaveNewsItem, onDeleteNewsItem }) => {
  console.log(newsItem, isLoggedIn, onSaveNewsItem, onDeleteNewsItem);
  if (!newsItem) {
    return <div>News item is not available</div>;
  }

  const { urlToImage, title, description, publishedAt, source } = newsItem;

  const sourceName = source ? source.name : 'Source name not available';

  return (
    <div className='news-card'>
      <div className='news-card__container'>
        {urlToImage && (
          <img
            className='news-card__image'
            src={urlToImage}
            alt={title || 'Image title not available'}
          />
        )}
        <div className='news-card__content'>
          <p className='news-card__date'>{publishedAt ? formatDate(publishedAt) : 'Date not available'}</p>
          <h3 className='news-card__title'>{title || 'Title not available'}</h3>
          <p className='news-card__description'>{description || 'Description not available'}</p>
          <h4 className='news-card__source'>{sourceName}</h4>
          {isLoggedIn && (
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
          {!isLoggedIn && <p>Sign in to save articles</p>}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
