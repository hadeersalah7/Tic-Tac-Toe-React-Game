import GameBoard from "./components/GameBoard/GameBoard";
import Log from "./components/Log/Log";
import Player from "./components/Player/Player";
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./winning-combinations";

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
  for (const c of WINNING_COMBINATIONS) {
    // const firstCombination
    // const secondCombination
    // const thirdCombination
      }
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
  let gameBoard = gameBoardStructure;
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player name="Player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        <GameBoard onSelect={handleSelectPlayer} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
};

export default App;
