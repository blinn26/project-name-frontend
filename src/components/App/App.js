import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import About from '../About/About';
import ModalWithForm from '../ModalWithForm/ModalWithForm';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Header />
      <Navigation />
      <Routes>
        <Route path='/' element={<Main onModalOpen={handleModalOpen} />} exact />
        <Route path='/saved-news' element={<SavedNews />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <ModalWithForm isOpen={isModalOpen} onClose={handleModalClose} />
      <Footer />
    </>
  );
}

export default App;
