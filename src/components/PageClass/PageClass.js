import React from 'react';
import './PageClass.css';

const PageClass = ({ children }) => {
  return (
    <div className='page'>
      <section className='page__wrapper'>{children}</section>
    </div>
  );
};

export default PageClass;
