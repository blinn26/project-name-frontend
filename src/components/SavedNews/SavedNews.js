import React, { useState, useEffect } from 'react';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';

function SavedNews({ isLoggedIn, savedNews, onDeleteNewsItem }) {
  const [username, setUsername] = useState('');
  const [savedArticlesCount, setSavedArticlesCount] = useState(0);
  const [keywords, setKeywords] = useState([]);

  useEffect(() => {
    if (isLoggedIn) {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user && user.savedArticles) {
        setUsername(user.username);
        setSavedArticlesCount(user.savedArticles.length);

        const keywordsArray = user.savedArticles.map((article) => article.keyword);
        setKeywords(keywordsArray);
      }
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return null;
  }

  return (
    <main>
      <SavedNewsHeader
        username={username}
        savedArticlesCount={savedArticlesCount}
        keywords={keywords}
        savedNews={savedNews}
        isLoggedIn={isLoggedIn}
        onDeleteNewsItem={onDeleteNewsItem}
      />
    </main>
  );
}

export default SavedNews;
