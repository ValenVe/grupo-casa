import React from 'react'
import "./Button.css"

const Button = ({ type = "primary", text }) => {
    return (
        <button className={`${type} main--button`}>{text}</button>
    )
}

export default Button