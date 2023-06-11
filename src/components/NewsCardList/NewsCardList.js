import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

const NewsCardList = ({ news, isLoggedIn, onDeleteNewsItem, saveNewsItem, savedNews }) => {
  console.log(onDeleteNewsItem);
  if (!news) {
    return <p>Loading...</p>;
  }

  return (
    <div className='news-card__list'>
      <h2 className='news-card__title'></h2>
      {isLoggedIn &&
        news.map((item) => (
          <NewsCard
            className='news-card'
            key={item.id}
            newsItem={item}
            onSaveNews={saveNewsItem}
            onDeleteNewsItem={onDeleteNewsItem}
            savedNews={savedNews}
            isLoggedIn={isLoggedIn}
          />
        ))}
    </div>
  );
};

export default NewsCardList;
