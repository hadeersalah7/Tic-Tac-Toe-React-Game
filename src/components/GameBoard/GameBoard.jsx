import React, {useState} from 'react'
const gameBoardStructure = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ]
function GameBoard({onSelect, activePlayer}) {
    const [gameboard, setGameBoard] = useState(gameBoardStructure)

    const handleGameBoardSelect = (rowSpan, colSpan) => {
        setGameBoard((prevGame) => { 
            const updatedBoard = [...prevGame.map(innerArray => [...innerArray])]
            updatedBoard[rowSpan][colSpan] = activePlayer
            return updatedBoard
        })
        onSelect()
    }
    return (

        <ol id="game-board" className={activePlayer}>
            {gameboard.map((row, rowSpan) => <li key={rowSpan}><ol>
                {row.map((playerBoard, colSpan) => <li key={colSpan}><button
                    onClick={() => handleGameBoardSelect(rowSpan, colSpan)}>{playerBoard}</button></li>)}
            </ol></li>)}
        </ol>
    )
}

export default GameBoard