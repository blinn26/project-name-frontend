import React from 'react';
import './PageClass.css';

const PageClass = ({ children }) => {
  return (
    <main className='page'>
      <section className='page__wrapper'>{children}</section>
    </main>
  );
};

export default PageClass;
