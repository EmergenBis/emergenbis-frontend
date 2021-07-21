import React from "react"
import "./style/Hero.css"

const Hero = props =>{
    return(
        <React.Fragment>
        <div className="Hero">
            <div className="Hero__color_filter" style={{height:props.h}}></div>
            <div className="Hero__img" style={{height:props.h}}>
                <img src={"https://images.pexels.com/photos/5935743/pexels-photo-5935743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} alt="" />
            </div>
        </div>
        </React.Fragment>
    );
}

export default Hero;