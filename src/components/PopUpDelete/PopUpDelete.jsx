import React from 'react'
import "./PopUpDelete.css"
import { Button } from "../../components"

const PopUpDelete = () => {
    return (
        <div className="popup--main">
            <h1 className="popup--title">
                ¿Estás seguro de que quieres eliminar<br />
                este proyecto?
            </h1>
            <div className="popup--buttons">
                <Button text="Si" />
                <div className="popup--space">

                </div>
                <Button type="secondary" text="No" />
            </div>
        </div>
    )
}

export default PopUpDelete