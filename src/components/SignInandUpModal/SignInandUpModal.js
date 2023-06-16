import React, { useState } from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function SignInandUpModal({ isOpen, setIsOpen, onClose, handleLogin, setSavedNews }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSignUp, setIsSignUp] = useState(true);
  const [successModal, setSuccessModal] = useState(false);
  const navigate = useNavigate();

  const isValid = Object.keys(errors).length === 0;

  const onSubmit = (data) => {
    if (isSignUp) {
      localStorage.setItem('user', JSON.stringify({ ...data, savedArticles: [] }));
      setSuccessModal(true);
      navigate('/');
      handleLogin();
    } else {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user && user.email === data.email && user.password === data.password) {
        navigate('/');
        setSavedNews(user.savedArticles);
      } else {
        alert('Invalid credentials');
      }
    }
    onClose();
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div>
      <ModalWithForm
        title={isSignUp ? 'Sign Up' : 'Sign In'}
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit(onSubmit)}>
        <label className='modal__label'>Email</label>
        <input
          className={`modal__input ${errors.email ? 'invalid' : ''}`}
          type='email'
          {...register('email', {
            required: 'This field is required',
            pattern: {
              value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/gim,
              message: 'Invalid email format',
            },
          })}
          placeholder='Email'
        />
        {errors.email && <span className='modal__error-message'>{errors.email.message}</span>}
        <label className='modal__label'>Password</label>
        <input
          className={`modal__input ${errors.password ? 'invalid' : ''}`}
          type='password'
          {...register('password', {
            required: 'This field is required',
            pattern: {
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/,
              message: 'Invalid password format',
            },
          })}
          placeholder='Password'
        />
        {errors.password && <span className='modal__error-message'>{errors.password.message}</span>}
        {isSignUp && (
          <>
            <label className='modal__label'>Username</label>
            <input
              className={`modal__input ${errors.username ? 'invalid' : ''}`}
              type='text'
              {...register('username', {
                required: 'This field is required',
                pattern: {
                  value: /^[a-z0-9_-]{4,30}$/i,
                  message: 'Invalid username format',
                },
              })}
              placeholder='Username'
            />
            {errors.username && <span className='modal__error-message'>{errors.username.message}</span>}
          </>
        )}
        <button
          className={`modal__button-submit ${!isValid ? 'modal__button-submit_disabled' : ''}`}
          type='submit'
          disabled={!isValid}>
          {isSignUp ? 'Sign Up' : 'Sign In'}
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
