import React from "react";
import icono from "../../images/icono.png";
import { Button } from "..";
import { Input } from "..";
import "./LoginCard.css";


const LoginCard = () => {
  return (
    <div className="card--div">
      <div className="div--img">
        <img src={icono} alt="logo grupo casa" />
      </div>
      <h1>
        Log in
      </h1>
      <div className="div--form">
        <Input type="email" name="email" id="email" text="Email" />
        <Input type="password" name="password" id="password" text="Contraseña" />
        <a href="www.google.com">Olvidé mi contraseña</a>
      </div>
      <Button text="Iniciar sesión" />
      <p className="error">
        Ha ocurrido un error
      </p>
    </div>
  );
};

export default LoginCard;
