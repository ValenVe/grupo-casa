import React from 'react'
import "./ButtonsFooter.css"
import { Button } from "../../components"

const ButtonsFooter = ({ firstType, secondType, thirdType, firstText, SecondText, ThirdText }) => {
    return (
        <div className="buttons--footer">
            <div className="buttonf--div">
                <Button type={firstType} text={firstText} />
            </div>
            <div className="buttonf--div needp">
                <Button type={secondType} text={SecondText} />
            </div>
            <div className="buttonf--div needp">
                <Button type={thirdType} text={ThirdText} />
            </div>
        </div>
    )
}

export default ButtonsFooter