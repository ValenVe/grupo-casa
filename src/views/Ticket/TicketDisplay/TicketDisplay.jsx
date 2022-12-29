import React from 'react'
import "./TicketDisplay.css"
import { Navbar, LocationBar, TicketCard, PageIndicator } from "../../../components"

const TicketDisplay = () => {
    return (
        <div className="display--main">
            <Navbar />
            <LocationBar text="Inicio/" title="Tickets" />
            <div className="tickets--holder">
                <TicketCard />
                <TicketCard />
                <TicketCard />
                <TicketCard />
                <div className="pageind">
                    <PageIndicator />
                </div>
            </div>
        </div >
    )
}

export default TicketDisplay