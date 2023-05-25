import React, { useState, useEffect } from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';

function SignInandUpModal({ isOpen, onClose, onLogin, switchToRegister }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(true); // initial state is sign up
  const [isValidEmail, setIsValidEmail] = useState(true);

  useEffect(() => {
    console.log(`Modal open state: ${isOpen}`);
  }, [isOpen]);

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsValidEmail(validateEmail(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation for confirming password can be done here
  };

  const handleCloseOnOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <ModalWithForm isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} buttonText='Sign In' isValid>
      <h2 className='modal__title'>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
      <input
        className={`modal__input ${!isValidEmail ? 'input_invalid' : ''}`}
        type='email'
        value={email}
        onChange={handleEmailChange}
        placeholder='Email'
      />
      {!isValidEmail && <span className='input_error'>Invalid email address</span>}
      <input
        className='modal__input'
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password'
      />
      {isSignUp && (
        <input
          className='modal__input'
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='Username'
        />
      )}
      <button className='modal__button-submit' type='submit'>
        {isSignUp ? 'Sign Up' : 'Sign In'}
      </button>
      <p>
        <span className='or-text'>or</span>{' '}
        <button className='toggle-form-button' onClick={toggleForm}>
          {isSignUp ? 'Sign In' : 'Sign Up'}
        </button>
      </p>
      {/*  <button className='modal__button-close' type='button' onClick={onClose}></button> */}
    </ModalWithForm>
  );
}

export default SignInandUpModal;
