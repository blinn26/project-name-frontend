import React, { useState, useCallback } from 'react';
import Main from '../Main/Main';
import Header from '../Header/Header';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
import About from '../About/About';
import SignInandUpModal from '../SignInandUpModal/SignInandUpModal';
import PageClass from '../PageClass/PageClass';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [userCredentials, setUserCredentials] = useState({
    username: '',
    email: '',
    password: '',
    isSignUp: false,
  });
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchSubmit = useCallback((search) => {
    setSearchTerm(search);
    console.log(search);
  }, []);

  const handleModalOpen = (isSignUp) => {
    setIsOpen(true);
    setUserCredentials((prevState) => ({
      ...prevState,
      isSignUp,
    }));
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  const handleUserCredentialsChange = (newUserCredentials) => {
    setUserCredentials(newUserCredentials);
  };

  console.log(searchTerm);

  return (
    <PageClass>
      <Header handleSearchSubmit={handleSearchSubmit} handleModalOpen={handleModalOpen} />{' '}
      {/* Both props are now passed to Header */}
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/saved-news' element={<SavedNews />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <SignInandUpModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onClose={handleModalClose}
        userCredentials={userCredentials}
        onUserCredentialsChange={handleUserCredentialsChange}
      />
      <Footer />
    </PageClass>
  );
}

export default App;
