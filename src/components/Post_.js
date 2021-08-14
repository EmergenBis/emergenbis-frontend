import React, { Component } from 'react';
import HeaderBackground from '../images/font1.jpg'
import ProfilePic from '../images/profile.jpg'
import "./style/Post_.css";

class Post_ extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="Badge m-5">
                    <div className="container mt-5 mb-1 Badge__userInfo">
                        <h4 className="text-center mt-5">{this.props.u_level}</h4>
                        <p className="text-center">{this.props.matter}</p>
                        <p className="text-center">{this.props.description}</p>
                        <p className="text-center">{this.props.created_at}</p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Post_;