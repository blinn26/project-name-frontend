import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

const NewsCardList = () => {
  return (
    <div className='news-card-list'>
      <NewsCard className='news-card-list__card' />
      {/* More cards go here */}
    </div>
  );
};

export default NewsCardList;
