import React from 'react';
import './Board.css';

function Square(props){
  return <div className="square" onClick={()=> props.handleClick(props)}>
    {props.square}
  </div>
}

export default Square
