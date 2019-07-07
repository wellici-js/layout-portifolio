import React from 'react';

import './styles.css';

export default function(props) {
  return (
    <div className={`container-fluid ${props.color}`}>

      <div className={`title cabecalho-${props.color}`}>
        <h2>{props.titulo}</h2>
      </div>

      <img src={props.img} className={props.tamanho}/>
    </div>
  );
}