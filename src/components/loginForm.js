import React, {Component} from "react"
import './style/loginForm.css'

class loginForm extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="loginForm m-5">
                    <form onSubmit={this.props.onSubmit}>
                        <div className="form-group mb-2">
                            <label className="mb-1">
                                E-mail
                            </label>
                            <input 
                                type="text"
                                className="form-control"
                                name="email"
                                onChange={this.props.onChange}
                                value={this.props.formValues.email} 
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label className="mb-1">
                                Password
                            </label>
                            <input 
                                type="text"
                                className="form-control"
                                name="password"
                                onChange={this.props.onChange}
                                value={this.props.formValues.password} 
                            />
                        </div>
                        
                        <button type="submit" className="login__button">
                            Login
                        </button>
                        <button type="submit" className="login__button" link={"/sign_up"}>
                            Sign up
                        </button>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default loginForm;