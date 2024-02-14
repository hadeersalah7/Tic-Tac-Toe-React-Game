import React from 'react'

const GameOver = ({message, rematch}) => {
    return (
        <div id="game-over">
            <h2>Game Over!</h2>
            {message && <p>{message} Won!</p>}
            {!message && <p>it&apos;s a draw!</p> }
            <button onClick={rematch}>Rematch?</button>
        </div>
    )
}

export default GameOver