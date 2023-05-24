import React, { useEffect, useState } from 'react';
import { fetchNews } from '../../utils/ThirdPartyApi';
import NewsCardList from '../NewsCardList/NewsCardList';
import About from '../About/About';
import './Main.css';

const Main = ({ onModalOpen }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const data = await fetchNews();
        setNews(data.articles);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    fetchNewsData();
  }, []);

  return (
    <div className='main'>
      <h1 className='main__title'>Welcome to our News Site</h1>
      <button className='main__button' onClick={onModalOpen}>
        Open Modal
      </button>
      <NewsCardList news={news} />
      <About />
    </div>
  );
};

export default Main;
