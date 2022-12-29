import React from 'react'
import "./Navbar.css"
import icono from "../../images/icono.png";

const Navbar = ({ type = "off" }) => {
    return (
        <div className='navbar--div'>
            <div className='first--half'>
                <div className={`${type} wrapper`}>
                    <p className={`${type} lines`}>
                        —<br />—<br />—<br />
                    </p>
                </div >
            </div>

            <div className="second--half">
                <p className="texto">Bienvenido Hector</p>
                <div className="img--wrapper">
                    <img src={icono} alt="logo grupo casa" className='icono--navbar'></img>
                </div>
            </div>
        </div>
    )
}

export default Navbar