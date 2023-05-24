import React from 'react';
import './Header.css';
import NewsExplorer from '../images/NewsExplorer.png';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__logo'>
        <img src={NewsExplorer} alt='NewsExplorer Logo' />
      </div>
      <h1 className='header__title'>{/* Insert Site Title Here */}</h1>
    </header>
  );
};

export default Header;
