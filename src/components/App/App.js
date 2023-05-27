// App.js
import React, { useState } from 'react';
import Main from '../Main/Main';
import Header from '../Header/Header';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
import About from '../About/About';
import SignInandUpModal from '../SignInandUpModal/SignInandUpModal';
import PageClass from '../PageClass/PageClass';
import { Route, Routes } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userCredentials, setUserCredentials] = useState({
    username: '',
    email: '',
    password: '',
    isSignUp: false,
  });

  const handleModalOpen = (isSignUp) => {
    setIsModalOpen(true);
    setUserCredentials((prevState) => ({
      ...prevState,
      isSignUp,
    }));
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleUserCredentialsChange = (newUserCredentials) => {
    setUserCredentials(newUserCredentials);
  };

  return (
    <PageClass>
      <Navigation handleModalOpen={handleModalOpen} />
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/saved-news' element={<SavedNews />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <SignInandUpModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        userCredentials={userCredentials}
        onUserCredentialsChange={handleUserCredentialsChange}
      />
      <Footer />
    </PageClass>
  );
}

export default App;
