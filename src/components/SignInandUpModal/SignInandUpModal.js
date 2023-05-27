import React, { useState, useEffect } from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';

function SignInandUpModal({ isOpen, onClose }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidUsername, setIsValidUsername] = useState(true);

  useEffect(() => {
    console.log(`Modal open state: ${isOpen}`);
  }, [isOpen]);

  const validateEmail = (email) => {
    const re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/gim;
    return re.test(email);
  };

  const validateUsername = (username) => {
    return username.length >= 2 && username.length <= 30;
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
    // Add password validation logic here, if needed
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSignUp) {
      // Handle sign up here...
      // Use username, email, and password values to create a new user
      // Make API calls, dispatch actions, etc.
    } else {
      // Handle sign in
      // Use email and password values to authenticate the user
      // Make API calls, dispatch actions, etc.
    }
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setUsername('');
    setEmail('');
    setPassword('');
    setIsValidEmail(true);
    setIsValidUsername(true);
  };

  return (
    <ModalWithForm
      title={isSignUp ? 'Sign Up' : 'Sign In'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isValid>
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
      {!isValidEmail && <span className='input_error'>Invalid email address</span>}
      <input
        className='modal__input'
        type='password'
        value={password}
        onChange={handlePasswordChange}
        placeholder='Password'
        required
      />
      <button
        className='modal__button-submit'
        type='Sign up'
        disabled={!isValidEmail || (!isValidUsername && isSignUp)}>
        {isSignUp ? 'Sign Up' : 'Sign In'}
      </button>
      <p className='modal__alternative'>
        or{' '}
        <span className='signin-link' onClick={toggleForm}>
          {isSignUp ? 'sign in' : 'sign up'}
        </span>
      </p>
    </ModalWithForm>
  );
}

export default SignInandUpModal;
