import React, {useState} from 'react'
const gameBoardStructure = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ]
function GameBoard({onSelect, turns}) {
    // const [gameboard, setGameBoard] = useState(gameBoardStructure)

    // const handleGameBoardSelect = (rowSpan, colSpan) => {
    //     setGameBoard((prevGame) => { 
    //         const updatedBoard = [...prevGame.map(innerArray => [...innerArray])]
    //         updatedBoard[rowSpan][colSpan] = activePlayer
    //         return updatedBoard
    //     })
    //     onSelect()
    // }
    let gameBoard = gameBoardStructure
    for (const turn of turns) {
        const { square, player } = turn
        const { row, col } = square
        gameBoard[row][col] = player
    }
    return (

        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => <li key={rowIndex}><ol>
                {row.map((playerBoard, colIndex) => <li key={colIndex}><button
                    onClick={() => onSelect(rowIndex, colIndex)}>{playerBoard}</button></li>)}
            </ol></li>)}
        </ol>
    )
}

export default GameBoard