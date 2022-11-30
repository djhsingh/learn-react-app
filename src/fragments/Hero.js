import React from 'react';
function Hero({text}) {
  return (
    <>
      <header className='container bg-dark text-white'>
          <h1 className='hero-text'>{text}</h1>
      </header>
    </>
  );
}

export default Hero;
