import React from 'react'
import "./Input.css"

const Input = ({ type, text, id }) => {
    return (
        <div>
            <label for={id}>{text}</label>
            <input className="input" type={type} id={id} />
        </div>
    )
}

export default Input