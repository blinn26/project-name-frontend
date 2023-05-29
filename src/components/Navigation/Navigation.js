import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import logo from '../images/NewsExplorer.png';

const Navigation = ({ handleModalOpen, isLoggedIn, setLogin, theme, toggleTheme }) => {
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
    <>
      <nav className={`navigation navigation__${theme}`}>
        <img className='navigation__logo' src={logo} alt='Logo' />
        <ul className='navigation__list'>
          <li className='navigation__item'>
            <Link className={`navigation__link navigation__highlight-${homeClass}-${theme}`} to='/'>
              Home
            </Link>
          </li>
          {isLoggedIn && (
            <li className='navigation__item'>
              <Link className={`navigation__link navigation__highlight-${articleClass}-${theme}`} to='/saved-news'>
                Saved articles
              </Link>
            </li>
          )}
          {/* More navigation items here */}
        </ul>
        {isLoggedIn ? (
          <div className={`navigation__user navigation__user-${theme}`}>
            <p className={`navigation__username navigation__username-${theme}`}>Username</p>
            <button onClick={() => setLogin(false)} className={`navigation__logout navigation__logout-${theme}`}>
              Log Out
            </button>
            <button onClick={toggleTheme}>Toggle Theme</button>
          </div>
        ) : (
          <button className='navigation__sign-in rectangle signIn' onClick={handleModalOpen}>
            Sign In
          </button>
        )}
      </nav>
    </>
  );
};

export default Navigation;
