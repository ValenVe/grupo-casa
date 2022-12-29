import React from 'react'
import "./PageIndicator.css"

const PageIndicator = () => {
    return (
        <div>
            <p className="page--indicator">
                {"<"} <span className="numeros">1/2/3</span> {">"}
            </p>
        </div>
    )
}

export default PageIndicator