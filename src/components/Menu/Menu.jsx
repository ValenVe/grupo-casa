import React from 'react'
import "./Menu.css"

const Menu = () => {
    return (
        <div className="menu--div">
            <div className="content">
                <p className="content--text">
                    Proyectos
                </p>
                <div className="separador"></div>
                <p className="content--text">
                    Usuarios
                </p>
                <div className="separador"></div>
                <p className="content--text">
                    Tickets
                </p>
                <div className="separador"></div>
                <p className="content--text">
                    Solicitudes
                </p>
                <div className="separador"></div>
                <p className="content--text">
                    Salir
                </p>
            </div>
        </div>
    )
}

export default Menu