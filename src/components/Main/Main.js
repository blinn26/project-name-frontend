import React from 'react';
import './Main.css';
import blackonWhite from '../images/phonepic.png';
import About from '../About/About';
/* import Preloader from '../Preloader/Preloader'; */

const Main = () => {
  return (
    <div className='main' style={{ backgroundImage: `url(${blackonWhite})` }}>
      <h1 className='main__title'></h1>
      <h2 className='main__subtitle'></h2>
      <About />
      {/*  {<Preloader />} */}
    </div>
  );
};

export default Main;
