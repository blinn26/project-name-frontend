import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} exact />
        <Route path='/saved-news' element={<SavedNews />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
