import React from "react"
import {Link} from "react-router-dom"
import "./style/Header.css"

class Header extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="Header">
                    <Link to="/">
                        <img src="https://i.ibb.co/0mXCPf8/Logo2.png" alt="logo"/>
                    </Link>
                </div>
            </React.Fragment>
        );
    }
}

export default Header;