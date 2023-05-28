import React from 'react';
import './About.css';
import benImage from '../images/BenImage.jpeg';

const About = () => {
  return (
    <section className='about'>
      <div className='about__container'>
        <div className='about__image-container'>
          <img className='about__image' src={benImage} alt='Ben Linn' />
        </div>
        <div className='about__text-container'>
          <h2 className='about__title'>About the author</h2>
          <p className='about__text'>
            My name is Ben Linn. I'm a passionate software developer skilled in numerous development technologies.
            Through my experience with Practicum, I've honed my skills and expanded my knowledge, ready to create value
            for potential customers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
