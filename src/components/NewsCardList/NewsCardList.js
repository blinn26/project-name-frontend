import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

const NewsCardList = ({ news, isLoggedIn, onDeleteNewsItem, saveNewsItem, savedNews }) => {
  if (!news) {
    return <p>Loading...</p>;
  }

  return (
    <section className='news-card__list'>
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
    </section>
  );
};

export default NewsCardList;
