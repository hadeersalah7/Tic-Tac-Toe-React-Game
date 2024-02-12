import GameBoard from "./components/GameBoard/GameBoard"
import Player from "./components/Player/Player"
import { useState } from "react"
const App = () => {
  const [activePlayer, setActivePlayer] = useState("X")

  const handleSelectPlayer = () => {
    setActivePlayer((currentPlayer) => currentPlayer == "X" ? "O" : "X")
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={ activePlayer === "X"} />
          <Player name="Player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        <GameBoard onSelect={handleSelectPlayer} activePlayer={ activePlayer} />
      </div>
      LOG
    </main>
  )
}

export default App
