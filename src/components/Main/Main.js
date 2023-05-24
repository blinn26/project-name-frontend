import React from 'react';
import About from '../About/About';
import './Main.css';
import blackonWhite from '../images/WhiteonBlack.png';

const Main = ({ onModalOpen }) => {
  return (
    <div className='main' style={{ backgroundImage: `url(${blackonWhite})` }}>
      <h1 className='main__title'></h1>
      <button className='main__button' onClick={onModalOpen}>
        Open Modal
      </button>
      <About />
    </div>
  );
};

export default Main;
