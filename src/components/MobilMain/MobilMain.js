import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MobilMain.css';

const MobilMain = ({ handleModalClose, handleModalOpen, handleLogOut, isLoggedIn }) => {
  const [loggedInStatus, setLoggedInStatus] = useState('');

  useEffect(() => {
    setLoggedInStatus(isLoggedIn ? 'logged-in' : 'logged-out');
  }, [isLoggedIn]);

  return (
    <div
      className='mobil-main'
      onClick={handleModalClose}>
      <div className={`mobil-main__container-${loggedInStatus}`}>
        <div className='mobil-main__over'>
          <Link
            to='/'
            className='mobil-main__logo mobil-main__link'
            onClick={handleModalClose}>
            News Explorer
          </Link>
          <button
            type='button'
            className='mobil-main__close-button'
            aria-label='Close'
            onClick={handleModalClose}>
            <img
              className='mobil-main__close-icon'
              alt='Close button'
              src='../images/MobilClose.png'
            />
          </button>
        </div>
        <Link
          to='/'
          className='mobil-main__home mobil-main__link'
          onClick={handleModalClose}>
          Home
        </Link>
        {isLoggedIn ? (
          <>
            <Link
              to='/saved-articles'
              className='mobil-main__articles mobil-main__link'
              onClick={handleModalClose}>
              Saved articles
            </Link>
            <button
              className='mobil-main__logout-button'
              onClick={handleLogOut}>
              Username
              <img
                src='../images/whiteLog.svg'
                alt='Logout Button'
                className='mobil-main__logout-image'
              />
            </button>
          </>
        ) : (
          <button
            className={`mobil-main__sign-in`}
            onClick={handleModalOpen}>
            Sign in
          </button>
        )}
      </div>
    </div>
  );
};

export default MobilMain;
