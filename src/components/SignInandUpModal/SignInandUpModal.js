import React, { useState, useEffect } from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';

function SignInandUpModal({ isOpen, onClose }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidUsername, setIsValidUsername] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  useEffect(() => {
    console.log(`Modal open state: ${isOpen}`);
  }, [isOpen]);

  const validateEmail = (email) => {
    const re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/gim;
    return re.test(email);
  };

  const validateUsername = (username) => {
    return username.length >= 4 && username.length <= 30;
  };

  const validatePassword = (password) => {
    return password.length >= 4 && password.length <= 30;
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (isSignUp) {
      setIsValidEmail(validateEmail(e.target.value));
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    if (isSignUp) {
      setIsValidUsername(validateUsername(e.target.value));
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setIsValidPassword(validatePassword(e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignUp) {
      // Handle sign up here...
    } else {
      // Handle sign in
    }
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setUsername('');
    setEmail('');
    setPassword('');
    setIsValidEmail(true);
    setIsValidUsername(true);
    setIsValidPassword(true);
  };

  const isFormValid = isValidEmail && isValidUsername && isValidPassword;

  return (
    <ModalWithForm title={isSignUp ? 'Sign Up' : 'Sign In'} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      {isSignUp && (
        <input
          className={`modal__input ${!isValidUsername ? 'invalid' : ''}`}
          type='text'
          value={username}
          onChange={handleUsernameChange}
          placeholder='Username'
          required
        />
      )}
      <input
        className={`modal__input ${!isValidEmail ? 'invalid' : ''}`}
        type='email'
        value={email}
        onChange={handleEmailChange}
        placeholder='Email'
        required
      />
      {!isValidEmail && <span className='modal__error-message'>This email is not available</span>}
      <input
        className={`modal__input ${!isValidPassword ? 'invalid' : ''}`}
        type='password'
        value={password}
        onChange={handlePasswordChange}
        placeholder='Password'
        required
      />
      <button
        className={`modal__button-submit ${!isFormValid ? 'modal__button-submit_disabled' : ''}`}
        type='submit'
        disabled={!isFormValid}>
        {isSignUp ? 'Sign Up' : 'Sign In'}
      </button>
      <p className='modal__alternative'>
        or{' '}
        <span className='signin-link' onClick={toggleForm}>
          {isSignUp ? 'Sign In' : 'Sign Up'}
        </span>
      </p>
    </ModalWithForm>
  );
}

export default SignInandUpModal;
