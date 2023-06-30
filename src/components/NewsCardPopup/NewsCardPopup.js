import React from 'react';
import './NewsCardPopup.css';

const NewsCardPopup = ({ isOpen, text }) => {
  return (
    <section className={`newscard-popup ${isOpen ? 'newscard-popup_open' : ''}`}>
      <article className='newscard-popup__content'>
        <p className='newscard-popup__text'>{text}</p>
      </article>
    </section>
  );
};

export default NewsCardPopup;
