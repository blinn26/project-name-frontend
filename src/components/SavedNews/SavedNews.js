import React, { useState, useEffect } from 'react';
import './SavedNews.css';
import NewsCardList from '../NewsCardList/NewsCardList';
import { fetchNews } from '../../utils/ThirdPartyApi'; // Update this path as necessary

const SavedNews = () => {
  const [news, setNews] = useState(null);

  useEffect(() => {
    const loadNews = async () => {
      const data = await fetchNews();
      setNews(data.articles);
    };

    loadNews();
  }, []);

  return (
    <div className='saved-news'>
      {/* Additional content goes here */}
      <NewsCardList news={news} />
    </div>
  );
};

export default SavedNews;
