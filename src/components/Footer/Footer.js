import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <p className='footer__text'>© 2023 Ben's News Page</p>
      <p className='footer__links'>
        <a href='https://www.example.com' target='_blank' rel='noopener noreferrer'>
          Ben's Global Warming Crisis
        </a>
      </p>
    </footer>
  );
};

export default Footer;
