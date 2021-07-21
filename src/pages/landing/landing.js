import React from "react"
import Footer from "../../components/Footer"
import Button from "../../components/MainButton"
import "./landing.css"

const Main = props =>{
    return(
        <React.Fragment>
            <div className="Main">
                <div className="Main__content">
                    <h1 className="Main__title">{props.title || "Welcome"}</h1>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" alt="logo"/>
                </div>
                <div className="Form">
                    <h1 className="log_title center">Log in</h1>
                    <div className="LogForm m-5">
                        <form>
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
                        </form>
                    </div>
                    <div className="button">
                        <Button contentText={"Login"} theme={"Button"} link={"/badges"}></Button>
                    </div>
                </div>
            </div>
            <Footer s={{bottom:0}}></Footer>
        </React.Fragment>
    );
};

export default Main;