import React from 'react';
import './PageClass.css';

const PageClass = ({ children }) => {
  return (
    <div className='page'>
      <div className='page__wrapper'>{children}</div>
    </div>
  );
};

export default PageClass;
