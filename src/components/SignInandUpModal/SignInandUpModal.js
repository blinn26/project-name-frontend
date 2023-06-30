import React, { useState } from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import { useNavigate } from 'react-router-dom';

function SignInandUpModal({ isOpen, setIsOpen, onClose, handleLogin, setSavedNews }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidUsername, setIsValidUsername] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [successModal, setSuccessModal] = useState(false);
  const navigate = useNavigate();

  const isFormValid = isValidEmail && isValidUsername && isValidPassword;

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
    setIsValidUsername(validateUsername(e.target.value));
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsValidEmail(validateEmail(e.target.value));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setIsValidPassword(validatePassword(e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignUp) {
      localStorage.setItem('user', JSON.stringify({ username, email, password, savedArticles: [] }));
      setSuccessModal(true);
      navigate('/');
      handleLogin();
      setIsOpen(false);
    } else {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user && user.email === email && user.password === password) {
        navigate('/');
        setSavedNews(user.savedArticles);
        setIsOpen(false);
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
    <>
      <ModalWithForm
        title={isSignUp ? 'Sign Up' : 'Sign In'}
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
          setIsSignUp(false);
        }}
        onSubmit={handleSubmit}>
        <label
          className='modal__label'
          htmlFor='email-input'>
          Email
        </label>
        <div className='input-group'>
          <div className='input-and-error'>
            <input
              id='email-input'
              className={`modal__input ${!isValidEmail ? 'invalid' : ''}`}
              type='email'
              value={email}
              onChange={handleEmailChange}
              placeholder='Email'
              required
            />
            {!isValidEmail && <span className='modal__error-message'>This email is not available</span>}
          </div>
        </div>
        <label
          className='modal__label'
          htmlFor='password-input'>
          Password
        </label>
        <div className='input-group'>
          <div className='input-and-error'>
            <input
              id='password-input'
              className={`modal__input ${!isValidPassword ? 'invalid' : ''}`}
              type='password'
              value={password}
              onChange={handlePasswordChange}
              placeholder='Password'
              required
            />
            {!isValidPassword && (
              <span className='modal__error-message'>
                Invalid password. It must be 8-30 characters long, include at least one upper case letter, one lower
                case letter, one digit, and one special character.
              </span>
            )}
          </div>
        </div>
        {isSignUp && (
          <>
            <label
              className='modal__label'
              htmlFor='username-input'>
              Username
            </label>
            <div className='input-group'>
              <div className='input-and-error'>
                <input
                  id='username-input'
                  className={`modal__input ${!isValidUsername ? 'invalid' : ''}`}
                  type='text'
                  value={username}
                  onChange={handleUsernameChange}
                  placeholder='Username'
                  required
                />
                {!isValidUsername && <span className='modal__error-message'>This username is not available</span>}
              </div>
            </div>
          </>
        )}
        <button
          className={`modal__button-submit ${!isFormValid ? 'modal__button-submit_disabled' : ''}`}
          type='submit'
          disabled={!isFormValid}>
          {isSignUp ? ' Sign Up' : ' Sign In'}
        </button>
        <div className='modal__alternative'>
          <span className='modal__alternative-or'>or</span>&nbsp;
          <button
            className='modal__alternative-action'
            type='button'
            onClick={toggleForm}>
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </button>
        </div>
      </ModalWithForm>

      <ModalWithForm
        title='Registration Successfully completed!'
        additionalClass='modal__success' // <-- Replace className with additionalClass
        isOpen={successModal}
        onClose={() => {
          setSuccessModal(false);
          setIsOpen(false);
        }}>
        <div
          className='modal__alternative'
          style={{ justifyContent: 'flex-start' }}>
          <button
            className='modal__alternative-action'
            type='button'
            onClick={() => {
              setSuccessModal(false);
              setIsOpen(true);
            }}>
            Sign in
          </button>
        </div>
      </ModalWithForm>
    </>
  );
}
export default SignInandUpModal;
