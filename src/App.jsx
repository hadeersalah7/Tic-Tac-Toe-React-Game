import GameBoard from "./components/GameBoard/GameBoard"
import Log from "./components/Log/Log"
import Player from "./components/Player/Player"
import { useState } from "react"
const App = () => {
  const [activePlayer, setActivePlayer] = useState("X")
  const [gameTurns, setGameTurns] = useState([])
  const handleSelectPlayer = (rowIndex, colIndex) => {
    setActivePlayer((currentPlayer) => currentPlayer == "X" ? "O" : "X")
    setGameTurns(prevTurns => {
      let currentPlayer = "X"
      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = "O"
      }
      let updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns]
      return updatedTurns
    })

  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={ activePlayer === "X"} />
          <Player name="Player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        <GameBoard onSelect={handleSelectPlayer} turns={gameTurns} />
      </div>
      <Log />
    </main>
  )
}

export default App
