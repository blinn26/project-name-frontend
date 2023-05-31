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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userCredentials, setUserCredentials] = useState({
    username: '',
    email: '',
    password: '',
    isSignUp: false,
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [news, setNews] = useState([]);
  const [savedNews, setSavedNews] = useState([]);
  const [numNewsToShow, setNumNewsToShow] = useState(3);
  const [theme, setTheme] = useState('light');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

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

  const handleSaveNews = (newsItem) => {
    setSavedNews([...savedNews, newsItem]);
  };

  useEffect(() => {
    const loadNews = async () => {
      try {
        const data = await fetchNews();
        if (searchTerm !== '') {
          const filteredData = data.filter((newsItem) =>
            newsItem.title.toLowerCase().includes(searchTerm.toLowerCase())
          );
          setNews(filteredData);
        } else {
          setNews(data);
        }
      } catch (error) {
        setError(error.message);
      }
    };

    const user = localStorage.getItem('user');
    if (user) {
      navigate('/saved-news');
      setIsLoggedIn(true);
    }

    loadNews();
  }, [searchTerm]);

  return (
    <PageClass className={theme}>
      {error && <div>Error: {error}</div>}
      <Header
        toggleTheme={toggleTheme}
        theme={theme}
        handleSearchSubmit={handleSearchSubmit}
        handleModalOpen={handleModalOpen}
        news={news}
      />
      <Routes>
        <Route
          path='/'
          element={
            <Main
              news={news}
              onSaveNews={handleSaveNews}
              numNewsToShow={numNewsToShow}
              setNumNewsToShow={setNumNewsToShow}
            />
          }
        />
        <Route path='/saved-news' element={<SavedNews isLoggedIn={isLoggedIn} savedNews={savedNews} />} />
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
