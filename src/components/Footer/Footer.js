import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__content'>
        <h2 className='footer__title'>Our News Site</h2>
        <p className='footer__text'>We provide quality news for everyone.</p>
      </div>
      <div className='footer__links'>{/* Place your navigation links here */}</div>
    </footer>
  );
};

export default Footer;
