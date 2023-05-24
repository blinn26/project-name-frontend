import React from 'react';
import About from '../About/About';
import './Main.css';

const Main = ({ onModalOpen }) => {
  return (
    <div className='main'>
      <h1 className='main__title'>Welcome2NeWZ</h1>
      <button className='main__button' onClick={onModalOpen}>
        Open Modal
      </button>
      <About />
    </div>
  );
};

export default Main;
