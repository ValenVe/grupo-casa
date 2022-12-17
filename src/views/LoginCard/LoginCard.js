import React from 'react'
import icono from "../../images/icono.png"
import { Button } from '../../components'
import "./LoginCard.css"

const LoginCard = () => {
  return (
    <div className="main--div">
      <div style={{ height: "500px" }}>
        <img src={icono} alt="logo grupo casa" />
        <input type="text" />
        <input type="password" />
        <Button />
      </div>
    </div>
  )
}

export default LoginCard;
