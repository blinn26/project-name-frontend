import React from 'react';
import './Main.css';
import About from '../About/About';
import Preloader from '../Preloader/Preloader';

const Main = ({ children }) => {
  return (
    <div className='main'>
      <h1 className='main__title'></h1>
      <h2 className='main__subtitle'></h2>
      {children}
      <About />
      <Preloader />
    </div>
  );
};

export default Main;
