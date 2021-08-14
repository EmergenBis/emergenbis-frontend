import React from "react";
import { Link } from "react-router-dom";
import Button from "./MainButton";
import "./style/Log_in.css";


class Log_in extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="Main">
          <center>
            <div className="LogForm m-5">
              <h1 className="center">Log in</h1>
              <form onSubmit={this.props.onSubmit}>
                <div className="form-group mb-2">
                  <label className="mb-1">Email</label>
                  <input type="email" className="form-control" name="email" />
                </div>
                <div className="form-group mb-2">
                  <label className="mb-1">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                  />
                </div>
                <div className="col-3">
                  <Button
                    contentText={"Login"}
                    theme={"Button"}
                    link={"/posts"}
                  ></Button>
                </div>
                <div className="col-3">
                  <Button
                    contentText={"Sign up"}
                    theme={"Button"}
                    link={"/sign_up"}
                  ></Button>
                </div>
              </form>
            </div>
          </center>
        </div>
      </React.Fragment>
    );
  }
}

export default Log_in;
