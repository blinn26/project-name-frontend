import React from 'react';
import './Header.css';
import NewsExplorer from '../images/NewsExplorer.png';

const Header = ({ onModalOpen }) => {
  console.log(onModalOpen); // This should log the function or undefined if it's not being passed correctly.

  return (
    <header className='header'>
      <div className='header__logo'>
        <img src={NewsExplorer} alt='NewsExplorer Logo' />
      </div>
      <h1 className='header__title'>{/* Insert Site Title Here */}</h1>
      <button className='main__button' onClick={onModalOpen}>
        Sign In
      </button>
    </header>
  );
};

export default Header;
