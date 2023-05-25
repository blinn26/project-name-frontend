import React from 'react';
import About from '../About/About';
import './Main.css';
import blackonWhite from '../images/phonepic.png';
/* import Preloader from '../Preloader/Preloader'; */

const Main = () => {
  return (
    <div className='main' style={{ backgroundImage: `url(${blackonWhite})` }}>
      <h1 className='main__title'></h1>
      {/*  {<Preloader />} */}
      <About />
    </div>
  );
};

export default Main;
