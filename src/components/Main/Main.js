import React from 'react';
import './Main.css';
import blackonWhite from '../images/phonepic.png';
/* import Preloader from '../Preloader/Preloader'; */

const Main = () => {
  return (
    <div className='main' style={{ backgroundImage: `url(${blackonWhite})` }}>
      <h1 className='main__title'></h1>
      {/*  {<Preloader />} */}
    </div>
  );
};

export default Main;
