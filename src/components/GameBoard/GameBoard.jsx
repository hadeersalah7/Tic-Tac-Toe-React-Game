import React, {useState} from 'react'
const gameBoardStructure = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ]
function GameBoard() {
    const [gameboard, setGameBoard] = useState(gameBoardStructure)

    const handleGameBoardSelect = (rowSpan, colSpan) => {
        setGameBoard((prevGame) => { 
            const updatedBoard = [...prevGame.map(innerArray => [...innerArray])]
            updatedBoard[rowSpan][colSpan] = "X"
            return updatedBoard
        })
    }
    return (

        <ol id="game-board">
            {gameboard.map((row, rowSpan) => <li key={rowSpan}><ol>
                {row.map((playerBoard, colSpan) => <li key={colSpan}><button
                    onClick={() => handleGameBoardSelect(rowSpan, colSpan)}>{playerBoard}</button></li>)}
            </ol></li>)}
        </ol>
    )
}

export default GameBoard