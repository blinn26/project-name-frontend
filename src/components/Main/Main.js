import React from 'react';
import About from '../About/About';
import './Main.css';
import blackonWhite from '../images/WhiteonBlack.png';
import Preloader from '../Preloader/Preloader';

const Main = ({ onModalOpen }) => {
  return (
    <div className='main' style={{ backgroundImage: `url(${blackonWhite})` }}>
      <h1 className='main__title'></h1>
      <button className='main__button' onClick={onModalOpen}>
        Open Modal
      </button>
      {/* <Preloader /> */}
      <About />
    </div>
  );
};

export default Main;
