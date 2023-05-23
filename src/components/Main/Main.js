import React, { useEffect, useState } from 'react';
import { fetchNews } from '../../utils/ThirdPartyApi';
import NewsCardList from '../NewsCardList/NewsCardList';
import './Main.css';

const Main = ({ onModalOpen }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews()
      .then((data) => {
        setNews(data.articles);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <div className='main'>
      <h1 className='main__title'>Welcome to our News Site</h1>
      <button onClick={onModalOpen}>Open Modal</button>
      <NewsCardList news={news} />
    </div>
  );
};

export default Main;
