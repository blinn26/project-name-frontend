// Modal.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import './Modal.css';

Modal.setAppElement('#root');

const CustomModal = ({ children, buttonText = 'Open Modal' }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className='modal'>
      <button onClick={openModal} className='modal__open-button'>
        {buttonText}
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className='modal__content'
        overlayClassName='modal__overlay'
        contentLabel='Modal'>
        {children}
        <button onClick={closeModal} className='modal__close-button'>
          Close
        </button>
      </Modal>
    </div>
  );
};

export default CustomModal;
