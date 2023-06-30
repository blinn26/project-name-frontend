import { Link } from 'react-router-dom';
import React from 'react';
import './Footer.css';
import github from '../../images/github.svg';
import linkedIn from '../../images/linkedin.svg';
import tripleten from '../../images/trip10.svg';

const Footer = () => {
  const handleNavigation = (url, event) => {
    event.preventDefault();
    window.open(url, '_blank');
  };

  return (
    <footer className='footer'>
      <div className='footer__left'>
        <p className='footer__copyright'>© 2023 Supersite, Powered by News API</p>
      </div>
      <nav className='footer__links'>
        <Link
          to='/'
          className='footer__button footer__home-button'>
          Home
        </Link>
        <a
          onClick={(event) => handleNavigation('https://www.linkedin.com/in/ben-linn-coding4l/', event)}
          className='footer__button'>
          <img
            alt='LinkedIn logo'
            src={linkedIn}
            className='footer__icon-linkedin'
          />
        </a>
        <a
          onClick={(event) => handleNavigation('https://github.com/blinn26', event)}
          className='footer__button'>
          <img
            alt='Github logo'
            src={github}
            className='footer__icon-github'
          />
        </a>
        <a
          onClick={(event) => handleNavigation('https://practicum.com', event)}
          className='footer__button'>
          <img
            alt='tripleten logo'
            src={tripleten}
            className='footer__tripleten-icon'
          />
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
