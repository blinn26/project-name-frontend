import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ModalWithForm.css';

const ModalWithForm = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation for confirming password can be done here
  };

  const handleCloseOnOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={`modal ${isOpen ? 'modal_open' : ''}`} onClick={handleCloseOnOverlayClick}>
      <form onSubmit={handleSubmit} className='modal__form'>
        <h2 className='modal__title'>Sign Up</h2>
        <input
          className='modal__input'
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='Username'
        />
        <input
          className='modal__input'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
        />
        <input
          className='modal__input'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
        />
        <input
          className='modal__input'
          type='password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder='Confirm Password'
        />
        <button className='modal__button-submit' type='submit'>
          Sign Up
        </button>
        <p>
          <span className='or-text'>or</span>{' '}
          <Link to='/signin' className='signin-link' onClick={onClose}>
            Sign In
          </Link>
        </p>
        <button className='modal__button-close' type='button' onClick={onClose}>
          Close
        </button>
      </form>
    </div>
  );
};

export default ModalWithForm;
