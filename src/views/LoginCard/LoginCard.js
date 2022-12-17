import React from "react";
import icono from "../../images/icono.png";
import { Button } from "../../components";
import "./LoginCard.css";

const LoginCard = () => {
  return (
    <div className="main--div">
      <div style={{ margin: "auto" }}>
        <img src={icono} alt="logo grupo casa" />
      </div>
      <input type="text" />
      <input type="password" />
      <Button />
    </div>
  );
};

export default LoginCard;
