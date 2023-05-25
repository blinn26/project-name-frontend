import React, { useState, useEffect } from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';

function SignInandUpModal({ isOpen, onClose }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(true); // initial state is sign up
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidUsername, setIsValidUsername] = useState(true);

  useEffect(() => {
    console.log(`Modal open state: ${isOpen}`);
  }, [isOpen]);

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validateUsername = (username) => {
    return username.length >= 2 && username.length <= 30; // adjust as needed
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsValidEmail(validateEmail(e.target.value));
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setIsValidUsername(validateUsername(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation for confirming password can be done here
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={isSignUp ? 'Sign Up' : 'Sign In'}
      isValid>
      <h2 className='modal__title'>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
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
        className={`modal__input ${!isValidUsername ? 'invalid' : ''}`}
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password'
        required
      />
      <p>
        <span className='or-text'>or</span>{' '}
        <button className='toggle-form-button' onClick={toggleForm}>
          {isSignUp ? 'Sign In' : 'Sign Up'}
        </button>
      </p>
    </ModalWithForm>
  );
}

export default SignInandUpModal;
