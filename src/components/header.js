import React from "react"
import {Link} from "react-router-dom"
import "./style/header.css"

class Header extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="Header">
                    <Link to="/">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" alt="logo"/>
                    </Link>
                </div>
            </React.Fragment>
        );
    }
}

export default Header;