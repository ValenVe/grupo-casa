import React from 'react'
import "./BuildingCard.css"
import edificio from "../../images/edificio.png";
import ProgressBar from '../ProgressBar/ProgressBar';

const BuildingCard = () => {
    return (
        <div className="buildingcard--div">
            <div className="building">
                <img src={edificio} alt="Edifcio" />
            </div>
            <div className="building--text">
                <div className="titulo">
                    <h3>
                        Aires de París
                    </h3>
                    <p className="division">
                        División: 2°C
                    </p>
                </div>
                <div className="information">
                    <p>
                        2/10 cuotas
                    </p>
                    <ProgressBar />
                    <p>
                        $2,000/<span>10,000</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BuildingCard