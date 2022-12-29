import React from 'react'
import "./TicketSelected.css"
import { Navbar, Button, ToggleBar } from "../../../components"

const TicketSelected = () => {
    return (
        <div className="selected--main">
            <Navbar />
            <div className="info--head">
                <p>
                    Inicio / tickets<br />
                    <span className="titulo--mainhead">Lionel Scaloni</span>
                </p>
            </div>
            <ToggleBar titleone="checked" typeone="selected" />
            <div className="information--div">
                <div className="info">
                    <p>
                        <span>Nombre:</span><br />
                        Lionel Scaloni
                    </p>
                    <br />
                    <p>
                        <span>Inversión:</span><br />
                        $500 USD
                    </p>
                </div>
                <div className="info">
                    <p>
                        <span>Obra:</span><br />
                        Aires de París
                    </p>
                    <br />
                    <p>
                        <span>N° de ticket:</span><br />
                        08918271
                    </p>
                </div>
            </div>
            <div className="info--footer">
                <div className="buttonfi--div">
                    <Button text="Volver" />
                </div>
                <div className="buttonfi--div needpa">
                    <Button text="Descartar" />
                </div>
                <div className="buttonfi--div needpa">
                    <Button type="success" text="Aprobar" />
                </div>
            </div>
        </div>
    )
}

export default TicketSelected