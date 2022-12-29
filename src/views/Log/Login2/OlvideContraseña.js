import React from 'react'
import { Input } from "../../../components"
import { Button } from "../../../components"
import "./OlvideContraseña.css"

const OlvideContraseña = () => {
    return (
        <div className='olvide--div'>
            <div className='olcard--div'>
                <h1>
                    ¿Olvidaste tu contraseña?
                </h1>
                <p>
                    Se enviara una nueva contraseña al siguiente<br />mail:
                </p>
                <Input type="email" name="email" id="email" text="Email" />
                <div>
                    <Button text="Enviar" />
                </div>
            </div>
        </div>
    )
}

export default OlvideContraseña