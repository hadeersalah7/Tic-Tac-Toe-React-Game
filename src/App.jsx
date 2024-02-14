import GameBoard from "./components/GameBoard/GameBoard";
import Log from "./components/Log/Log";
import Player from "./components/Player/Player";
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver/GameOver";

const gameBoardStructure = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
const derivedActivePlayer = (gameTurns) => {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
};



const App = () => {
  const [gameTurns, setGameTurns] = useState([]);
  let activePlayer = derivedActivePlayer(gameTurns);
  let message
  let gameBoard = [...gameBoardStructure].map((array) => [...array]);
  for (const combination of WINNING_COMBINATIONS) {
    const firstCombination = gameBoard[combination[0].row][combination[0].column]
    const secondCombination = gameBoard[combination[1].row][combination[1].column]
    const thirdCombination = gameBoard[combination[2].row][combination[2].column]
    if (
      firstCombination &&
      firstCombination === secondCombination &&
      firstCombination === thirdCombination
    ) {
      message = firstCombination
    }
  }
  const hasDraw = gameTurns.length === 9 && !message

  const handleSelectPlayer = (rowIndex, colIndex) => {
    setGameTurns((prevTurns) => {
      let currentPlayer = derivedActivePlayer(prevTurns);

      let updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  };
  
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  const handleRematchClick = () => {
    setGameTurns([])
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player name="Player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        {(message || hasDraw) && <GameOver message={message} rematch={handleRematchClick} />}
        <GameBoard onSelect={handleSelectPlayer} board={gameBoard}  />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
};

export default App;
