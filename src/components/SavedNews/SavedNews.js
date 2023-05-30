import React, { useState, useEffect } from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import { fetchNews } from '../../utils/ThirdPartyApi';

function SavedNews() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const loadNews = async () => {
      const data = await fetchNews();
      setNews(data);
    };

    loadNews();
  }, []);

  return <NewsCardList news={news} />;
}

export default SavedNews;
