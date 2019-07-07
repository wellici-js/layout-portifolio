import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  

import NavBar from './navbar';
import Section from './section';

function App () {
  return (
    <>
    <NavBar/>
    <Section
      color="verde"
      img={require('../img/1418949122.svg')}
      tamanho="tamanho-svg"
      titulo="Nós construímos WireFrames impressionantes"
    />
    <Section
      color="branco"
    />
    <Section
      color="cinza"
    />
    </>
  );
}

export default App;