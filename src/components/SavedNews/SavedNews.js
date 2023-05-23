import React from 'react';
import './SavedNews.css';
import NewsCardList from '../NewsCardList/NewsCardList';

const SavedNews = () => {
  return (
    <div className='saved-news'>
      {/* Additional content goes here */}
      <NewsCardList />
    </div>
  );
};

export default SavedNews;
