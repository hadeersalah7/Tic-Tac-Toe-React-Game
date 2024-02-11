import Player from "./components/Player"
const App = () => {
  

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Player 1" symbol="X" />
          <Player name="Player 2" symbol="O" />
        </ol>
        GAME board
      </div>
      LOG
    </main>
  )
}

export default App
