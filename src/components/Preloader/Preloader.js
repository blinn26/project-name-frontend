import React from 'react';
import spinningCircle from '../../images/Ellipse.svg';
import './Preloader.css';

const Preloader = () => (
  <figure className='spinner-container'>
    <img
      className='circle-preloader'
      src={spinningCircle}
      alt='Spinning Circle'
    />
    <figcaption>Searching for the news</figcaption>
  </figure>
);

export default Preloader;
