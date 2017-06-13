import React from 'react';
import Square from './Square';
import './Board.css';

function Board(props){
  return (
    <div className="board">
        {
          props.board.map((row, i) =>
            <div key={i} className="row">
              {
                row.map((sq, j) =>
                  <Square
                    key={j}
                    square={sq}
                    row={i}
                    column={j}
                    handleClick={(squareProps) =>
                      props.handleBoardClick(squareProps)
                  }/>
                )
              }
            </div>
          )
        }
    </div>
  )
}

export default Board
