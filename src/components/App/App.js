import React, { useState } from 'react';

import PageClass from '../PageClass/PageClass';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return <PageClass isModalOpen={isModalOpen} handleModalOpen={handleModalOpen} handleModalClose={handleModalClose} />;
}

export default App;
