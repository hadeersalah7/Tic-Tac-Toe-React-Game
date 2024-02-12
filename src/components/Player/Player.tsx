import React, { useState } from 'react'

const Player = ({ intialName, symbol, isActive }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [playerName, setPlayerName] = useState(intialName)
    const handleEditingClick = () => {
        setIsEditing((editing) => !editing)
    }

    const handleChangeClick = (event) => {
        setPlayerName(event.target.value)
    }
    return (
        <>
            <li className={isActive ? "active" : undefined}>
                <span className="player">
                    {isEditing == false ? (
                        <span className="player-name">{intialName}</span>
                    ) : (
                        <input type='text' required value={playerName} onChange={handleChangeClick}/>
                    )}
                    <span className="player-logo">{symbol}</span>
                </span>
                <button onClick={handleEditingClick}>{isEditing ? "Save" : "Edit" }</button>
            </li>
        </>
    )
}

export default Player