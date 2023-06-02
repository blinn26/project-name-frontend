import React from 'react';
import './SavedNewsHeader.css';

const SavedNewsHeader = ({ username, savedArticlesCount, keywords }) => {
  return (
    <div className='saved-news-header'>
      <p className='saved__title'>Saved Articles</p>
      <h2 className='saved__header'>
        {username}, you have {savedArticlesCount} saved articles
      </h2>
      <p className='saved__keywords'>
        By keywords: <span className='saved__bold'>{keywords.join(', ')}</span>
      </p>
    </div>
  );
};

export default SavedNewsHeader;
