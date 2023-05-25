import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
/* import Navigation from '../Navigation/Navigation'; */
import About from '../About/About';
import SignInandUpModal from '../SignInandUpModal/SignInandUpModal';
import { Route, Routes } from 'react-router-dom';
import './PageClass.css';

const PageClass = ({ isModalOpen, handleModalOpen, handleModalClose }) => {
  return (
    <div className='page'>
      <div className='page__wrapper'>
        <Header onModalOpen={handleModalOpen} />
        {/*  <Navigation /> */}
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/saved-news' element={<SavedNews />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <SignInandUpModal isOpen={isModalOpen} onClose={handleModalClose} />
        <Footer />
      </div>
    </div>
  );
};

export default PageClass;
