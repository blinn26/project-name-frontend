import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import logo from '../images/NewsExplorer.png';
import homeImage from '../images/Home.png'; // Import the home image

const Navigation = ({ handleModalOpen, isLoggedIn, setLogin }) => {
  const [homeClass, setHomeClass] = useState('');
  const [articleClass, setArticleClass] = useState('');

  useEffect(() => {
    if (isLoggedIn) {
      setHomeClass('inactive');
      setArticleClass('active');
    } else {
      setHomeClass('active');
      setArticleClass('inactive');
    }
  }, [isLoggedIn]);

  return (
    <nav className='navigation'>
      <img className='navigation__logo' src={logo} alt='Logo' />

      <li className='navigation__item'>
        <Link className={`navigation__link navigation__highlight-${homeClass}`} to='/'>
          <img src={homeImage} alt='Home' className='navigation__home-image' /> {/* Added className here */}
        </Link>
      </li>
      {isLoggedIn && (
        <li className='navigation__item'>
          <Link className={`navigation__link navigation__highlight-${articleClass}`} to='/saved-news'>
            Saved articles
          </Link>
        </li>
      )}

      {isLoggedIn ? (
        <div className='navigation__user'>
          <p className='navigation__username'>Username</p>
          <button onClick={() => setLogin(false)} className='navigation__logout'>
            Log Out
          </button>
        </div>
      ) : (
        <button className='navigation__sign-in signIn' onClick={handleModalOpen}>
          Sign In
        </button>
      )}
    </nav>
  );
};

export default Navigation;
