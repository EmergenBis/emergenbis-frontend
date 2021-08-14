import React from "react"
import HeroImg from "../images/hero_image.jpg"
import "./style/Hero.css"

const Hero = props =>{
    return(
        <React.Fragment>
        <div className="Hero">
            <div className="Hero__color_filter" style={{height:props.h}}></div>
            <div className="Hero__img" style={{height:props.h}}>
                <img src={'https://static.vecteezy.com/system/resources/previews/001/589/630/non_2x/green-background-with-fading-square-and-dots-free-vector.jpg'} alt="" />
            </div>
        </div>
        </React.Fragment>
    );
}

export default Hero;