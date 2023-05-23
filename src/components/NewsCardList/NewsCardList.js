import React, { useState, useEffect } from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';
import { fetchNews } from '../../utils/ThirdPartyApi'; // Update this path as necessary

const NewsCardList = () => {
  const [news, setNews] = useState(null);

  useEffect(() => {
    const loadNews = async () => {
      const data = await fetchNews();
      setNews(data.articles);
    };

    loadNews();
  }, []);

  return (
    <div className='news-card__list'>
      <h2 className='news-card__title'>News</h2>
      {news ? news.map((item, index) => <NewsCard key={index} newsItem={item} />) : <p>Loading...</p>}
    </div>
  );
};

export default NewsCardList;
