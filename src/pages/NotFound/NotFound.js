import React from "react";
import ERROR from "../../images/404-error.png"
import Footer from "../../components/Footer"
import "./NotFound.css"

const NotFound = () =>{
    return(
        <React.Fragment>
            <div className="container NotFound">
                <img src={Error} alt="Not found" />
            </div>
            <Footer s={{bottom:0}}></Footer>
        </React.Fragment>
    );
}

export default NotFound