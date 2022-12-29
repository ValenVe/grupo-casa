import React from 'react'
import "./SearchBar.css"
import search from "../../images/search.png"
import group from "../../images/group.png"

const SearchBar = () => {
    return (
        <div className="search--wrapper">
            <div className="textBox">
                <img src={search} alt="lupa" className="lupa" />
                <input type="text" placeholder="Buscar" className="search--input"></input>
            </div>
            <div className="filters--button">
                <img src={group} alt="filters logo" />
            </div>
        </div >
    )
}

export default SearchBar