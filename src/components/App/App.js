import React, { useState, useCallback, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Main from '../Main/Main';
import Header from '../Header/Header';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
import SignInandUpModal from '../SignInandUpModal/SignInandUpModal';
import PageClass from '../PageClass/PageClass';
import { fetchNews } from '../../utils/ThirdPartyApi';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const [news, setNews] = useState([]);
  const [savedNews, setSavedNews] = useState([]);
  const [numNewsToShow, setNumNewsToShow] = useState(3);
  const [theme, setTheme] = useState('light');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const [userCredentials, setUserCredentials] = useState({
    username: '',
    email: '',
    password: '',
    isSignUp: false,
  });

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleSearchSubmit = useCallback((search) => {
    setSearchTerm(search);
    loadNews(search);
    setHasSearched(true);
  }, []);

  const handleModalOpen = (isSignUp) => {
    setIsOpen(true);
    setUserCredentials((prevState) => ({
      ...prevState,
      isSignUp: isSignUp,
    }));
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  const handleUserCredentialsChange = (newUserCredentials) => {
    setUserCredentials(newUserCredentials);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogOut = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('user');
    navigate('/');
  };

  const handleSaveNews = (newsItem) => {
    const newsWithID = { ...newsItem, id: Math.random().toString() };

    const newSavedNews = [...savedNews, newsWithID];
    setSavedNews(newSavedNews);

    if (isLoggedIn) {
      const user = JSON.parse(localStorage.getItem('user'));
      user.savedArticles = newSavedNews;
      localStorage.setItem('user', JSON.stringify(user));
    }
  };

  const loadNews = async (search) => {
    setIsLoading(true);
    setError(null);
    setTimeout(async () => {
      try {
        const data = await fetchNews(search);
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
      setIsLoading(false);
    }, 1000);
  };
  const handleDeleteNews = (newsItem) => {
    setSavedNews(savedNews.filter((item) => item.id !== newsItem.id));
  };
  useEffect(() => {
    console.log(savedNews);
  }, [savedNews]);
  return (
    <PageClass className={theme}>
      {error && <section>Error: {error}</section>}
      <header>
        <Header
          toggleTheme={toggleTheme}
          theme={theme}
          handleSearchSubmit={handleSearchSubmit}
          handleModalOpen={handleModalOpen}
          news={news}
          isLoggedIn={isLoggedIn}
          handleLogOut={handleLogOut}
        />
      </header>
      <main>
        <Routes>
          <Route
            path='/'
            element={
              <Main
                isLoading={isLoading}
                isError={error !== null}
                news={news}
                onSaveNewsItem={handleSaveNews}
                onDeleteNewsItem={handleDeleteNews}
                numNewsToShow={numNewsToShow}
                setNumNewsToShow={setNumNewsToShow}
                isLoggedIn={isLoggedIn}
                handleLogin={handleLogin}
                handleModalOpen={handleModalOpen}
                hasSearched={hasSearched}
              />
            }
          />
          <Route
            path='/saved-news'
            element={
              <SavedNews
                isLoggedIn={isLoggedIn}
                savedNews={savedNews}
                onDeleteNewsItem={handleDeleteNews}
              />
            }
          />
        </Routes>
      </main>
      <SignInandUpModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onClose={handleModalClose}
        userCredentials={userCredentials}
        onUserCredentialsChange={handleUserCredentialsChange}
        handleLogin={handleLogin}
        setSavedNews={setSavedNews}
      />
      <Footer />
    </PageClass>
  );
}

export default App;
