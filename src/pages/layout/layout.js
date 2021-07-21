import React from "react"
import Header from "../../components/header";
import './layout.css';

function Layout(props){
    return(
        <React.Fragment>
            <div className="Layout">
                <Header></Header>
                {props.children}
            </div>
        </React.Fragment>
    );
}

export default Layout;