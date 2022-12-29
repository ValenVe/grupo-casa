import React from 'react'
import "./CardInversion.css"
import { ProgressBar } from '../../components';
import { Button } from "../../components"
import edificio from "../../images/edificio.png";

const CardInversion = ({ type = "not--selected" }) => {
    return (
        <div className={`${type} cardinv--div`}>
            <img src={edificio} alt="edificio" />
            <div className="cardinv--firsthalf">
                <div className="card--title">
                    <p className="cardinv--title">
                        Aires de París<br />1°A
                    </p>
                </div>
                <div className="cardinv--text">
                    <p className="progress--text">
                        Progreso: <span className="porcentaje">42.19%</span>
                    </p>
                    <ProgressBar />
                    <p className="quantity--text">
                        $21,482 / <span className="porcentaje">$50,912</span>
                    </p>
                </div>
            </div>
            <div className="cardinv--button">
                <Button type="success" text="PUBLICADA" />
            </div>
        </div>
    )
}

export default CardInversion