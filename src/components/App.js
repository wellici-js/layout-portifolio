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