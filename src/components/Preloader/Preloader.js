import React from 'react';
import spinningCircle from '../images/Ellipse.png';
import './Preloader.css';

const Preloader = () => (
  <div className='spinner-container'>
    <img
      className='circle-preloader'
      src={spinningCircle}
      alt='Spinning Circle'
    />
  </div>
);

export default Preloader;
