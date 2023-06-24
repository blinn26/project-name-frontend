import React from 'react';
import './ModalWithForm.css';

const ModalWithForm = ({ title, name, onSubmit, children, isOpen, onClose, additionalClass }) => {
  const handleCloseOnClickOutside = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`modal-overlay ${isOpen ? 'modal-overlay_open' : ''}`}
      onClick={handleCloseOnClickOutside}>
      <div
        className={`modal ${additionalClass}`}
        onClick={(e) => e.stopPropagation()}>
        <form
          className='modal__form'
          name={name}
          onSubmit={onSubmit}>
          <h2 className='modal__title'>{title}</h2>
          {children}
          <button
            className='modal__button-close'
            type='button'
            onClick={onClose}></button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
