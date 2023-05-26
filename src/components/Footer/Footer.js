import { Link } from 'react-router-dom';
import React from 'react';
import './Footer.css';
import github from '../images/github.png';
import linkedIn from '../images/linkedin.png';
import twitter from '../images/twitter.png';
import practicum from '../images/Practicum.png';
import home from '../images/Home.png';
import apiLogo from '../images/nlogo.png';

const Footer = () => {
  const handleNavigation = (url) => {
    window.open(url, '_blank');
  };

  return (
    <footer className='footer'>
      <p className='footer__copyright'>© 2023 Powered by Ben Linn's Brain</p>
      <div className='footer__links'>
        <Link to='/' className='footer__button footer__home-button'>
          <img alt='Home' src={home} className='footer__home-icon' />
        </Link>
        <button onClick={() => handleNavigation('https://twitter.com/createdbyben26')} className='footer__button'>
          <img alt='Twitter logo' src={twitter} className='footer__icon' />
        </button>
        <button
          onClick={() => handleNavigation('https://www.linkedin.com/in/ben-linn-coding4l/')}
          className='footer__button'>
          <img alt='LinkedIn logo' src={linkedIn} className='footer__icon' />
        </button>
        <button onClick={() => handleNavigation('https://github.com/blinn26')} className='footer__button'>
          <img alt='Github logo' src={github} className='footer__icon' />
        </button>
        <button onClick={() => handleNavigation('https://practicum.com')} className='footer__button'>
          <img alt='Practicum logo' src={practicum} className='footer__practicum-icon' />
        </button>
        <button onClick={() => handleNavigation('https://newsapi.org')} className='footer__button footer__api-button'>
          <img alt='nlogo' src={apiLogo} className='footer__api-icon' />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
