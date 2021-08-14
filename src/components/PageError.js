import React from "react"
import "./style/PageError.css"

const PageError = (props) =>{
    return(
        <div className="PageError">
            <h1>{props.error}</h1>
        </div>
    )
}

export default PageError