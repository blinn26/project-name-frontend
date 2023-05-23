import React, { useState } from 'react';
import './ModalWithForm.css';

const ModalWithForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false); // control the modal visibility

  const handleSubmit = (e) => {
    e.preventDefault();
    setModalIsOpen(false); // close the modal after submitting the form
  };

  const handleOpenModal = () => {
    setModalIsOpen(true); // open the modal
  };

  // Check if the modal is open before rendering
  if (!modalIsOpen) {
    return <button onClick={handleOpenModal}>Sign up</button>;
  }

  return (
    <div className='modal'>
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
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default ModalWithForm;
