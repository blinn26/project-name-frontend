import React, { useState } from 'react';
import './PopupWithForm.css';

const PopupWithForm = ({ isOpen, onClose }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleCloseOnOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={`popup ${isOpen ? 'popup_open' : ''}`} onClick={handleCloseOnOverlayClick}>
      <form onSubmit={handleSubmit} className='popup__form'>
        <input type='text' value={value} onChange={handleChange} className='popup__input' />
        <button className='popup__button-close' type='button' onClick={onClose}></button>
      </form>
    </div>
  );
};

export default PopupWithForm;
