import React from 'react';
import './About.css';
import BenImage from '../../images/BenImage.svg';

const About = () => {
  return (
    <main className='about'>
      <section className='about__image-container'>
        <figure className='about__image-wrapper'>
          <img
            className='about__image'
            src={BenImage}
            alt='Ben Linn'
          />
        </figure>
      </section>
      <section className='about__text-container'>
        <h2 className='about__title'>About the author</h2>
        <p className='about__text'>
          My name is Ben Linn. I'm a passionate software developer skilled in numerous development technologies. Through
          my experience with TripleTen, I've honed my skills and expanded my knowledge, ready to create value for
          potential customers.
        </p>
      </section>
    </main>
  );
};

export default About;
