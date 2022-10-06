import "./App.css";
import { useState } from "react";
import  calculateWinner  from './Components/Algoritm';
import Square from './Components/Square';
function App() {

  const [squares, setSquares] = useState(Array(9).fill(null))
  const [isX, setIsX] = useState(true);

  const handleClick = (i) => {
    if (calculateWinner(squares) || squares[i]) {
      return
    }

    squares[i] = isX ? 'X' : 'O'
    setSquares(squares)
    setIsX(!isX)
  }

  const winner = calculateWinner(squares)
  let status
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = 'Next player: ' + (isX ? 'X' : 'O');
  }

  const handleRestart = () => {
    setIsX(true)
    setSquares(Array(9).fill(null))
  }

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />
  }
console.log(status)

  return (
      <div className="game-board">
          {squares.map((squares, i) => (
              <div key={i} className="box">
                {renderSquare(i)}
              </div>
          ))}
        <div className="status">{status}</div>
        <button className="restart" onClick={handleRestart}>Restart Game!</button>
      </div>
  );
}

export default App;
