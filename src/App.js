import React, {Component} from 'react';
import Board from './Board.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
      ],
      playerTurn: "X"
    }
  }
  boardHandler = (squareProps) => {
    const {board, playerTurn} = this.state;
    let {row, column} = squareProps;
    const newBoard = board.map((stateRow, i)=> {
      if (i === row) {
        stateRow.map((stateCol, j)=> {
          if (j === column) {
            stateRow[j] = playerTurn;
          }
          return stateCol;
        })
      }
      return stateRow;
    })
    this.checkForWin();
    this.toggleTurn();
    this.setState({board: newBoard})
  }
  toggleTurn = ()=> {
    const {playerTurn} = this.state;
    const toggle = playerTurn === "O" ? "X" : "O";
    this.setState({playerTurn: toggle})
  }
  checkForWin() {
    let win = document.getElementById('winner');
    let {board, playerTurn} = this.state;
    function horizontalWin() {
      for (var i = 0; i < board.length; i++) {
        if ((board[i][0] !== "") &&
        (board[i][0] === board[i][1] && board[i][0] === board[i][2])) {
          return true;
        };
      };
    };
    function verticalWin() {
      for (var i = 0; i < board.length; i++) {
        if ((board[0][i] !== "") &&
        (board[0][i] === board[1][i] && board[0][i] === board[2][i])) {
          return true;
        };
      };
    };
    function diagonalWin() {
      if ((board[1][1] !== "") &&
      ((board[0][0] === board[1][1] && board[0][0] === board[2][2]) ||
      (board[0][2] === board[1][1] && board[0][2] === board[2][0]))) {
        return true;
      };
    };
    if (horizontalWin() || verticalWin() || diagonalWin()) {
      win.innerHTML = playerTurn + ' Won!';
    };
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h3>TicTacToe</h3>
          <Board
            board={this.state.board}
            handleBoardClick={(squareProps)=>
              this.boardHandler(squareProps)
            }/>
          <h3 id="winner"></h3>
        </div>
      </div>
    );
  }
}

export default App;
