import React, { useState } from 'react';
import './PopupWithForm.css';

const PopupWithForm = ({ isOpen, onClose }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleCloseOnClickOutside = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={`popup ${isOpen ? 'popup_open' : ''}`} onClick={handleCloseOnClickOutside}>
      <form onSubmit={handleSubmit} className='popup__form'>
        <input type='text' value={inputValue} onChange={handleInputChange} className='popup__input' />
        <button className='popup__button-close' type='button' onClick={onClose}></button>
      </form>
    </div>
  );
};

export default PopupWithForm;
