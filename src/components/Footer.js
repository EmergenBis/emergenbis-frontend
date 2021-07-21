import React from "react"
import "./style/Footer.css"

const Footer = (props) =>{
    return(
        <React.Fragment>
            <div className="Footer" style={props.s}>
                <p>EmergenBIS by TIDBIS51M 2021</p>
            </div>
        </React.Fragment>
    );
};

export default Footer;