import React from 'react';
import spinningCircle from '../../images/Ellipse.png';
import './Preloader.css';

const Preloader = () => (
  <div className='spinner-container'>
    <img
      className='circle-preloader'
      src={spinningCircle}
      alt='Spinning Circle'
    />
    <p>Searching for the news</p>
  </div>
);

export default Preloader;
