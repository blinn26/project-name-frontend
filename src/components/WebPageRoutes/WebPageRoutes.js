import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './Main/Main';
import SavedNews from './SavedNews/SavedNews';

function WebPageRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/saved-news' element={<SavedNews />} />
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default WebPageRoutes;
