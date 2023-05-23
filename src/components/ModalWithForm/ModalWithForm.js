import React, { useState } from 'react';
import Modal from './Modal';
import './ModalWithForm.css';

const ModalWithForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Modal buttonText='Sign Up'>
      <form onSubmit={handleSubmit} className='form'>
        <input
          className='form__input'
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='Username'
        />
        <input
          className='form__input'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
        />
        <input
          className='form__input'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
        />
        <button className='form__button' type='submit'>
          Submit
        </button>
      </form>
    </Modal>
  );
};

export default ModalWithForm;
