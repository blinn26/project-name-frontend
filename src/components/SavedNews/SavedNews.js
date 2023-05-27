import React, { useState, useEffect } from 'react';
import './SavedNews.css';
import NewsCardList from '../NewsCardList/NewsCardList';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import { fetchNews } from '../../utils/ThirdPartyApi'; // Update this path as necessary

const SavedNews = ({ username }) => {
  const [news, setNews] = useState(null);

  useEffect(() => {
    const loadNews = async () => {
      const data = await fetchNews();
      setNews(data.articles);
    };

    loadNews();
  }, []);

  const keywords = [...new Set(news?.map((article) => article.keyword))];

  return (
    <div className='saved-news'>
      <SavedNewsHeader username={username} savedArticlesCount={news?.length} keywords={keywords} />
      <NewsCardList news={news} />
    </div>
  );
};

export default SavedNews;
