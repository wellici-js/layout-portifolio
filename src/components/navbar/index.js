import React from 'react';

import './styles.css';

export default function (props) {

  // Criação do componente NavBar

  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      
      <a className="navbar-brand" href="#">
        {/* <img src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/026/full/react.png" width="130" height="80" alt="Logo"/> */}
        <h3>Logo</h3>
      </a>

    <div className="box-itens">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          {/* <a className="navbar-brand" href="#">Home</a> */}
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">About<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">Team<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">Portifolio<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">Contact<span className="sr-only">(current)</span></a>
            </li>
          </ul>
        </div>
    </div>

  </nav>
  );
}