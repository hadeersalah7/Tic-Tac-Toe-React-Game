import React, { useState } from 'react'

const Player = ({ name, symbol }) => {
    const [isEditing, setIsEditing] = useState(false)
    const handleEditingClick = () => {
        setIsEditing(true)
    }

    return (
        <>
            <li>
                <span className="player">
                    {isEditing == false ? (
                        <span className="player-name">{name}</span>
                    ) : (
                        <input type='text' placeholder='Your Score:' />
                    )}
                    <span className="player-logo">{symbol}</span>
                </span>
                <button onClick={handleEditingClick}>Edit</button>
            </li>
        </>
    )
}

export default Player