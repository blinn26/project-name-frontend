import React, { useState, useEffect } from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';

function SavedNews({ isLoggedIn, savedNews }) {
  const [username, setUsername] = useState('');
  const [savedArticlesCount, setSavedArticlesCount] = useState(0);
  const [keywords, setKeywords] = useState([]);

  useEffect(() => {
    if (isLoggedIn) {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user && user.savedArticles) {
        setUsername(user.username);
        setSavedArticlesCount(user.savedArticles.length);

        const keywordsArray = user.savedArticles.map((article) => article.title.split(' ')[0]);
        setKeywords(keywordsArray);
      }
    }
  }, [isLoggedIn]);

  if (isLoggedIn) {
    console.log('User is logged in');
  }

  return (
    <>
      <SavedNewsHeader username={username} savedArticlesCount={savedArticlesCount} keywords={keywords} />
      <NewsCardList news={savedNews} />
    </>
  );
}

export default SavedNews;
