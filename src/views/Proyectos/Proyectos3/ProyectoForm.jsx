import React from 'react'
import "./ProyectoForm.css"
import { CrossButton, LocationBar, Navbar, ButtonsFooter, Input } from "../../../components"
import pasillosmall from "../../../images/pasillosmall.png"
import balconsmall from "../../../images/balconsmall.png"
import terrazasmall from "../../../images/terrazasmall.png"


const ProyectoForm = () => {
    return (
        <div className="form--main">
            <Navbar />
            <LocationBar text="Inicio / Proyectos" title="Editar Proyecto" />
            <div className="vista--form">
                <div className="form--firsthalf">
                    <div className="form--one">
                        <div className="first--input">
                            <Input type="text" id="proyecto" text="Proyecto:" />
                        </div>
                        <div className="second--input">
                            <Input type="text" id="udeproyecto" text="Unidad de proyecto:" />
                        </div>
                    </div>
                    <div className="form--two">
                        <label for="descripcion">Descripción</label>
                        <textarea id="descripcion" name="descripcion" rows="6" cols="50">
                        </textarea>
                    </div>
                    <div className="form--three">
                        <Input type="text" id="valor" text="Valor estimado de la unidad" />
                        <Input type="text" id="amenities" text="Amenities de la unidad:" />
                        <Input type="text" id="finalizacion" text="Finalización de la obra:" />
                    </div>
                </div>
                <div className="form--secondhalf">
                    <span>Imágenes del proyecto</span>
                    <div className="form--images">
                        <div className="par">
                            <div className="imgone">
                                <CrossButton />
                            </div>
                            <div className="imgtwo">
                                <CrossButton />
                            </div>
                        </div>
                        <div className="par">
                            <div className="imgthree">
                                <CrossButton />
                            </div>
                            <div className="imgfour">
                                <CrossButton />
                            </div>
                        </div>
                    </div>
                    <button className="select--button">Seleccionar archivos</button>
                </div>
            </div>
            <ButtonsFooter thirdType="success" firstText="volver" SecondText="Guardar" ThirdText="Publicar" />
        </div>
    )
}

export default ProyectoForm