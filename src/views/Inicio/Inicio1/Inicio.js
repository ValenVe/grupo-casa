import React from 'react'
import "./Inicio.css"
import { Navbar, TicketCard, BuildingCard, Menu } from "../../../components"

const Inicio = () => {
    return (
        <div className="inicio--wrapper">
            <Navbar />
            <div className="inicio--menu">
                <Menu />
            </div>
            <div className="cards--table">
                <p className="titles">Últimos proyectos</p>
                <div className="building--cards">
                    <BuildingCard />
                    <BuildingCard />
                </div>
                <p className="titles">Últimos tickets</p>
                <div className="ticket--cards">
                    <TicketCard />
                    <TicketCard />
                </div>
            </div>
        </div>
    )
}

export default Inicio