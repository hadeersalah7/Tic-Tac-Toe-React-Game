import React, { useState } from 'react'

const Player = ({ name, symbol }) => {
    const [isEditing, setIsEditing] = useState(false)
    const handleEditingClick = () => {
        setIsEditing(!isEditing)
    }

    return (
        <>
            <li>
                <span className="player">
                    {isEditing == false ? (
                        <span className="player-name">{name}</span>
                    ) : (
                        <input type='text' required value={name}/>
                    )}
                    <span className="player-logo">{symbol}</span>
                </span>
                <button onClick={handleEditingClick}>{isEditing ? "Save" : "Edit" }</button>
            </li>
        </>
    )
}

export default Player