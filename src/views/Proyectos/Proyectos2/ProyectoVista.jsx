import React from 'react'
import "./ProyectoVista.css"
import { Button, LocationBar, Navbar, ButtonsFooter } from "../../../components"
import living from "../../../images/living.png"
import pasillo from "../../../images/pasillo.png"
import balcon from "../../../images/balcon.png"
import terraza from "../../../images/terraza.png"

const ProyectoVista = () => {
    return (
        <div className="vista--main">
            <Navbar />
            <LocationBar text="Inicio / Proyectos" title="Aires de París" />
            <div className="vista--images">
                <div className="images--firsthalf">
                    <p className="images--subtitle">
                        Aires de París<br />
                        <span className="images--title">
                            Departamento 3°C
                        </span>
                    </p>
                    <p className="images--valor">
                        Valor:<br />
                        <span className="valor--final">
                            $50.000
                        </span>
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br />
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut<br />
                        enim ad minim veniam
                    </p>
                    <div className="text--holder">
                        <div className="texth--firsthalf">
                            <p>
                                <span>Amenities:</span><br /><br />
                                Lorem ipsum dolor sit<br />
                                amet, consectetur<br />
                                adipiscing elit, sed do<br />
                                eiusmod tempor<br />
                                incididunt.
                            </p>
                        </div>
                        <div>
                            <p className="texth--secondhalf">
                                <span>Finzalización de la obra:</span><br /><br />
                                10 de septiembre de 2024
                            </p>
                        </div>
                    </div>
                </div>
                <div className="images--secondhalf">
                    <div className="living--image">
                        <img src={living} alt="living room" />
                    </div>
                    <div className="secondary--images">
                        <div className="small--image left">
                            <img src={terraza} alt="terraza" />
                        </div>
                        <div className="small--image center">
                            <img src={balcon} alt="balcon" />
                        </div>
                        <div className="small--image right">
                            <img src={pasillo} alt="pasillo" />
                        </div>
                    </div>
                </div>
            </div>
            <ButtonsFooter thirdType="secondary" firstText="Volver" SecondText="Editar" ThirdText="Eliminar" />
        </div>
    )
}

export default ProyectoVista