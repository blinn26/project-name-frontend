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
import SearchForm from '../SearchForm/SearchForm'; // import SearchForm

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userCredentials, setUserCredentials] = useState({
    username: '',
    email: '',
    password: '',
    isSignUp: false,
  });

  const [searchTerm, setSearchTerm] = useState(''); // add state for searchTerm

  const handleSearchSubmit = (search) => {
    setSearchTerm(search);
    // Add logic to handle search
    console.log(searchTerm);
  };

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
        <Route
          path='/'
          element={
            <Main>
              <SearchForm handleSearchSubmit={handleSearchSubmit} /> {/* add SearchForm */}
            </Main>
          }
        />
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
