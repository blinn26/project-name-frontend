import React from 'react';
import './NewsCardPopup.css';

const NewsCardPopup = ({ isOpen, text }) => {
  return (
    <div className={`newscard-popup ${isOpen ? 'newscard-popup_open' : ''}`}>
      <div className='newscard-popup__content'>
        <p className='newscard-popup__text'>{text}</p>
      </div>
    </div>
  );
};

export default NewsCardPopup;
