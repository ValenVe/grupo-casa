import React from 'react'
import { SearchBar, PlusButton, PageIndicator, CardInversion, Navbar, LocationBar } from '../../../components'
import "./ProyectoMain.css"

const ProyectoMain = () => {
    return (
        <div className="proyecto--main">
            <Navbar />
            <LocationBar text="Inicio/" title="Proyectos" />
            <div className="main--cards">
                <CardInversion type="selected" />
                <CardInversion />
                <CardInversion />
                <CardInversion />
            </div>
            <PageIndicator />
            <div className="main--footer">
                <PlusButton />
            </div>
        </div>
    )
}

export default ProyectoMain