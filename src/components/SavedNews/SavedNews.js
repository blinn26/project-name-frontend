import React, { useState, useEffect } from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import { fetchNews } from '../../utils/ThirdPartyApi';

function SavedNews({ isLogedIn }) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const loadNews = async () => {
      const data = await fetchNews();
      setNews(data);
    };

    loadNews();
  }, []);

  if (isLogedIn) {
    console.log('User is logged in');
  }

  return <NewsCardList news={news} />;
}

export default SavedNews;
