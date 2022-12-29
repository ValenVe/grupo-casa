import React from 'react'
import "./ToggleBar.css"

const ToggleBar = ({ typeone, typetwo, typethree, titleone, titletwo, titlethree }) => {
    return (
        <div className="togglebar">
            <div className="togglebar--titles">
                <p className={`toggle--title ${titleone}`}>
                    Información
                </p>
                <p className={`toggle--title ${titletwo}`}>
                    Chat
                </p>
                <p className={`toggle--title ${titlethree}`}>
                    Historial
                </p>
            </div>
            <div className="line">
                <div className={`toggleone ${typeone}`}>

                </div>
                <div className={`toggletwo ${typetwo}`}>

                </div>
                <div className={`togglethree ${typethree}`}>

                </div>
            </div>
        </div>
    )
}

export default ToggleBar