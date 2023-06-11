import React, { useState } from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import { useNavigate } from 'react-router-dom';

function SignInandUpModal({ isOpen, setIsOpen, onClose, handleLogin, setSavedNews }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidUsername, setIsValidUsername] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true); // new state for password validation
  const [successModal, setSuccessModal] = useState(false);
  const navigate = useNavigate();

  const isFormValid = isValidEmail && isValidUsername && isValidPassword; // update isFormValid

  const validateUsername = (username) => {
    const re = /^[a-z0-9_-]{4,30}$/i;
    return re.test(username);
  };

  const validateEmail = (email) => {
    const re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/gim;
    return re.test(email);
  };

  const validatePassword = (password) => {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/;
    return re.test(password);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    if (isSignUp) {
      setIsValidUsername(validateUsername(e.target.value));
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (isSignUp) {
      setIsValidEmail(validateEmail(e.target.value));
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (isSignUp) {
      setIsValidPassword(validatePassword(e.target.value)); // validate password
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignUp) {
      localStorage.setItem('user', JSON.stringify({ username, email, password, savedArticles: [] }));
      setSuccessModal(true);
      navigate('/');
      handleLogin();
    } else {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user && user.email === email && user.password === password) {
        navigate('/');
        setSavedNews(user.savedArticles); // Changed this line
      } else {
        alert('Invalid credentials');
      }
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
      <ModalWithForm
        title={isSignUp ? 'Sign Up' : 'Sign In'}
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}>
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
          className={`modal__input ${!isValidPassword ? 'invalid' : ''}`} // add 'invalid' class if password is not valid
          type='password'
          value={password}
          onChange={handlePasswordChange}
          placeholder='Password'
          required
        />
        {!isValidPassword && (
          <span className='modal__error-message'>
            Invalid password. It must be 8-30 characters long, include at least one upper case letter, one lower case
            letter, one digit, and one special character.
          </span>
        )}
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
          {isSignUp ? ' Sign Up' : ' Sign In'}
        </button>
        <p className='modal__alternative'>
          <span className='modal__alternative-or'> or </span>
          <span
            className='modal__alternative-action'
            onClick={toggleForm}>
            {isSignUp ? ' Sign In' : ' Sign Up'}
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
