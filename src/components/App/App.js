import React, { useState, useCallback, useEffect } from 'react';
import Main from '../Main/Main';
import Header from '../Header/Header';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
import SignInandUpModal from '../SignInandUpModal/SignInandUpModal';
import PageClass from '../PageClass/PageClass';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { fetchNews } from '../../utils/ThirdPartyApi';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [userCredentials, setUserCredentials] = useState({
    username: '',
    email: '',
    password: '',
    isSignUp: false,
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [news, setNews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadNews = async () => {
      const data = await fetchNews();
      setNews(data);
    };

    loadNews();
  }, []);

  const handleSearchSubmit = useCallback((search) => {
    setSearchTerm(search);
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
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      navigate('/saved-news');
    }
  }, []);

  return (
    <PageClass>
      <Header handleSearchSubmit={handleSearchSubmit} handleModalOpen={handleModalOpen} news={news} />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/saved-news' element={<SavedNews />} />
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
