import React from "react"
import Hero from "../../components/Hero"
import Footer from "../../components/Footer"
import Button from "../../components/MainButton"
import "./Landing.css"

const Main = props =>{
    return(
        <React.Fragment>
            <div className="Main">
                <div className="Main__content">
                    <h1 className="Main__title">{props.title || "Begin"}</h1>
                    <Button contentText={"Login"} theme={"Button"} link={"/login"}></Button>
                </div>
                <Hero h={"88vh"}></Hero>
            </div>
            <Footer s={{bottom:0}}></Footer>
        </React.Fragment>
    );
};

export default Main;