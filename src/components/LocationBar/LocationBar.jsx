import React from 'react'
import "./LocationBar.css"
import { Navbar, SearchBar } from "../../components"

const LocationBar = ({ text, title }) => {
    return (
        <div className="vista--head">
            <p>
                {text}<br />
                <span className="titulo--mainhead">{title}</span>
            </p>
            <SearchBar />
        </div>
    )
}

export default LocationBar