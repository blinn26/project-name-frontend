import React from 'react';
import './SavedNewsHeader.css';
import NewsCardList from '../NewsCardList/NewsCardList';

const SavedNewsHeader = ({ username, savedArticlesCount, keywords, savedNews, isLoggedIn, onDeleteNewsItem }) => {
  return (
    <>
      <section className='saved-news__container'>
        <p className='saved__title'>Saved Articles</p>
        <h2 className='saved__header'>
          {username}, you have {savedArticlesCount} saved articles
        </h2>
        <p className='saved__keywords'>
          By keywords: <span className='saved__bold'>{keywords.join(', ')}</span>
        </p>
      </section>
      {savedNews && savedNews.length > 0 && (
        <section className='news-card-list-wrapper'>
          <NewsCardList
            news={savedNews}
            isLoggedIn={isLoggedIn}
            onDeleteNewsItem={onDeleteNewsItem}
            keywords={keywords}
            savedNews
          />
        </section>
      )}
    </>
  );
};

export default SavedNewsHeader;
