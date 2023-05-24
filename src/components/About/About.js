import React from 'react';
import './About.css';
import benImage from '../images/BenImage.jpeg';

const About = () => {
  return (
    <section className='about'>
      <h2 className='about__title'></h2>
      <p className='about__text'></p>
      {<img className='about__image' src={benImage} alt='benselfie' />}
    </section>
  );
};

export default About;
