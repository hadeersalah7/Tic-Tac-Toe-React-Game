import React, {useState} from 'react'

function GameBoard({onSelect, board}) {
    
    return (

        <ol id="game-board">
            {board.map((row, rowIndex) =>
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerBoard, colIndex) =>
                            <li key={colIndex}>
                                <button
                                    disabled={playerBoard !== null}
                                    onClick={() => onSelect(rowIndex, colIndex)}>{playerBoard}
                                </button>
                            </li>)}
                    </ol>
                </li>)}
        </ol>
    )
}

export default GameBoard