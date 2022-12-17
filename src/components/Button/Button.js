import React from 'react'
import "./Button.css"

const Button = ({ type = "primary" }) => {
    return (
        <button className={`${type} main--button`}>hola</button>
    )
}

export default Button