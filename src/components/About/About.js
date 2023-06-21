import React from 'react';
import './About.css';
import BenImage from '../../images/BenImage.svg';

const About = () => {
  return (
    <main className='about'>
      <div className='about__image-container'>
        <figure className='about__image-wrapper'>
          <img
            className='about__image'
            src={BenImage}
            alt='Ben Linn'
          />
        </figure>
      </div>
      <div className='about__text-container'>
        <h2 className='about__title'>About the author</h2>
        <p className='about__text'>
          This block describes the project author. Here you should indicate your name, what you do, and which
          development technologies you know.
        </p>
        <p className='about__text'>
          You can also talk about your experience with TripleTen, what you learned there, and how you can help potential
          customers.
        </p>
      </div>
    </main>
  );
};

export default About;
