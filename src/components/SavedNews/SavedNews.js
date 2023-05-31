import React, { useState, useEffect } from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import { fetchNews } from '../../utils/ThirdPartyApi';

function SavedNews({ isLogedIn }) {
  const [news, setNews] = useState([]);
  const [username, setUsername] = useState('');
  const [savedArticlesCount, setSavedArticlesCount] = useState(0);
  const [keywords, setKeywords] = useState([]);

  useEffect(() => {
    const loadNews = async () => {
      const data = await fetchNews();
      setNews(data);
    };

    loadNews();
  }, []);

  useEffect(() => {
    if (isLogedIn) {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        setUsername(user.username);

        setSavedArticlesCount(user.savedArticles.length);

        const keywordsArray = user.savedArticles.map((article) => article.title.split(' ')[0]);
        setKeywords(keywordsArray);
      }
    }
  }, [isLogedIn]);

  if (isLogedIn) {
    console.log('User is logged in');
  }

  return (
    <>
      <SavedNewsHeader username={username} savedArticlesCount={savedArticlesCount} keywords={keywords} />
      <NewsCardList news={news} />
    </>
  );
}

export default SavedNews;
