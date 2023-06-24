import { Link } from 'react-router-dom';
import React from 'react';
import './Footer.css';
import github from '../../images/github.svg';
import linkedIn from '../../images/linkedin.svg';
import twitter from '../../images/twitter.svg';
import tripleten from '../../images/trip10.svg';
import home from '../../images/home.svg';
import apiLogo from '../../images/NewsAPILogo.svg';

const Footer = () => {
  const handleNavigation = (url, event) => {
    event.preventDefault();
    window.open(url, '_blank');
  };

  return (
    <footer className='footer'>
      <div className='footer__left'>
        <p className='footer__copyright'>©2023 Supersite, Powered by NewsAPI</p>
      </div>
      <nav className='footer__links'>
        <div className='footer__links-left'>
          <Link
            to='/'
            className='footer__button footer__home-button'>
            <img
              alt='Home'
              src={home}
              className='footer__home-icon'
            />
          </Link>
          <a
            onClick={(event) => handleNavigation('https://practicum.com', event)}
            className='footer__button'>
            <img
              alt='tripleten logo'
              src={tripleten}
              className='footer__tripleten-icon'
            />
          </a>
        </div>
        <div className='footer__links-right'>
          <a
            onClick={(event) => handleNavigation('https://twitter.com/createdbyben26', event)}
            className='footer__button'>
            <img
              alt='Twitter logo'
              src={twitter}
              className='footer__icon-twitter'
            />
          </a>

          <a
            onClick={(event) => handleNavigation('https://www.linkedin.com/in/ben-linn-coding4l/', event)}
            className='footer__button'>
            <img
              alt='LinkedIn logo'
              src={linkedIn}
              className='footer__icon'
            />
          </a>
          <a
            onClick={(event) => handleNavigation('https://github.com/blinn26', event)}
            className='footer__button'>
            <img
              alt='Github logo'
              src={github}
              className='footer__icon'
            />
          </a>
          <a
            onClick={(event) => handleNavigation('https://newsapi.org', event)}
            className='footer__button footer__api-button'>
            <img
              alt='nlogo'
              src={apiLogo}
              className='footer__api-icon'
            />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
