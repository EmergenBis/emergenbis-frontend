import React, {Component} from "react"
import './style/signinForm.css'

class signinForm extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="signinForm m-5">
                    <form onSubmit={this.props.onSubmit}>
                    <div className="form-group mb-2">
                            <label className="mb-1">
                                Name
                            </label>
                            <input 
                                type="text"
                                className="form-control"
                                name="name"
                                onChange={this.props.onChange}
                                value={this.props.formValues.name} 
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label className="mb-1">
                                Birthdate
                            </label>
                            <input 
                                type="text"
                                className="form-control"
                                name="birthdate"
                                onChange={this.props.onChange}
                                value={this.props.formValues.birthdate} 
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label className="mb-1">
                                Country
                            </label>
                            <input 
                                type="text"
                                className="form-control"
                                name="country"
                                onChange={this.props.onChange}
                                value={this.props.formValues.country} 
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label className="mb-1">
                                City
                            </label>
                            <input 
                                type="text"
                                className="form-control"
                                name="city"
                                onChange={this.props.onChange}
                                value={this.props.formValues.city} 
                            />
                        </div>
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
                        <div className="form-group mb-2">
                            <label className="mb-1">
                                Confirm Password
                            </label>
                            <input 
                                type="text"
                                className="form-control"
                                name="confirm_password"
                                onChange={this.props.onChange}
                                value={this.props.formValues.confirm_password} 
                            />
                        </div>
                        <button type="submit" className="signgin__button">
                            Sign in
                        </button>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default signinForm;