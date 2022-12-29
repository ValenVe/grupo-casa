import React from 'react'
import "./TicketCard.css"
import { Button } from "../../components"

const TicketCard = () => {
    return (
        <div className="ticket--div">
            <p className="ticket--text">
                <span>Nombre:</span><br />Lionel Scaloni
            </p>
            <p className="ticket--text">
                <span>Inversión:</span><br />Julián Álvarez
            </p>
            <p className="ticket--text">
                <span>Obra:</span><br />Julián Álvarez
            </p>
            <p className="ticket--text">
                <span>N° de ticket:</span><br />Julián Álvarez
            </p>
            <div className="ticket--button">
                <Button text="PUBLICADA" type="success" />
            </div>
        </div>
    )
}

export default TicketCard