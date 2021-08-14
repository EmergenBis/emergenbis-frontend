import React, {Component} from "react"
import './style/Sign_up.css'
import Button from "./MainButton";

class Sign_up extends React.Component{
    render(){
        return(
            <React.Fragment>
                <center>
                    <div className="SignForm m-5">
                        <h1 className="center">Sign up</h1>
                        <form onSubmit={this.props.onSubmit}>
                            <div className="form-group mb-2">
                                <label className="mb-1">
                                    Email
                                </label>
                                <input 
                                    type="email"
                                    className="form-control"
                                    name="email"
                                />
                            </div>
                            <div className="form-group mb-2">
                                <label className="mb-1">
                                    Password
                                </label>
                                <input 
                                    type="password"
                                    className="form-control"
                                    name="password"
                                />
                            </div>
                            <div className="form-group mb-2">
                                <label className="mb-1">
                                    Confirm password
                                </label>
                                <input 
                                    type="password"
                                    className="form-control"
                                    name="confirm_password"
                                />
                            </div>
                            <div className="col-3">
                                <Button contentText={"Sign up"} theme={"Button"} link={"/login"}></Button>
                            </div>
                        </form>
                    </div>
                </center>
            </React.Fragment>
        );
    }
}

export default Sign_up;