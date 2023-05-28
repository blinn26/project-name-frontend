import React, { useState, useEffect } from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';

function SignInandUpModal({ isOpen, setIsOpen, onClose }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidUsername, setIsValidUsername] = useState(true);
  const [successModal, setSuccessModal] = useState(false);

  const isFormValid = isValidEmail && isValidUsername && password.length >= 4 && password.length <= 30;

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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignUp) {
      console.log('Signing up with:', { username, email, password });
      setSuccessModal(true);
    } else {
      console.log('Signing in with:', { email, password });
    }
    setUsername('');
    setEmail('');
    setPassword('');
    onClose();
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
    <div>
      <ModalWithForm title={isSignUp ? 'Sign Up' : 'Sign In'} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
        <label className='modal__label'>Email</label>
        <input
          className={`modal__input ${!isValidEmail ? 'invalid' : ''}`}
          type='email'
          value={email}
          onChange={handleEmailChange}
          placeholder='Email'
          required
        />
        {!isValidEmail && <span className='modal__error-message'>This email is not available</span>}
        <label className='modal__label'>Password</label>
        <input
          className='modal__input'
          type='password'
          value={password}
          onChange={handlePasswordChange}
          placeholder='Password'
          required
        />
        {isSignUp && (
          <>
            <label className='modal__label'>Username</label>
            <input
              className={`modal__input ${!isValidUsername ? 'invalid' : ''}`}
              type='text'
              value={username}
              onChange={handleUsernameChange}
              placeholder='Username'
              required
            />
          </>
        )}
        <button
          className={`modal__button-submit ${!isFormValid ? 'modal__button-submit_disabled' : ''}`}
          type='submit'
          disabled={!isFormValid}>
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </button>
        <p className='modal__alternative'>
          <span className='modal__alternative-or'>or</span>
          <span className='modal__alternative-action' onClick={toggleForm}>
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </span>
        </p>
      </ModalWithForm>
      <ModalWithForm
        title='Success'
        className='modal__success'
        isOpen={successModal}
        onClose={() => setSuccessModal(false)}>
        <h1 className='modal__title-success'>Registration Successfully completed!</h1>
        <p className='modal__alternative'>
          <span
            className='modal__alternative-action'
            onClick={() => {
              setSuccessModal(false);
              setIsSignUp(false);
              setIsOpen(true);
            }}>
            Sign in
          </span>
        </p>
      </ModalWithForm>
    </div>
  );
}

export default SignInandUpModal;
