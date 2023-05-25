import React from 'react';
import './Main.css';
import blackonWhite from '../images/createdbyben.png';
import About from '../About/About';
/* import Preloader from '../Preloader/Preloader'; */

const Main = () => {
  return (
    <div className='main'>
      <h1 className='main__title'></h1>
      <h2 className='main__subtitle'></h2>
      <img src={blackonWhite} className='main__createdbyben' alt='createdbyben' />
      <About />
      {/*  {<Preloader />} */}
    </div>
  );
};

export default Main;
