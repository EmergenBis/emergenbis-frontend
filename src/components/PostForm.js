import React, { Component } from "react";
import "./style/PostForm.css";

class PostForm extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="BadgeForm m-5">
          <form onSubmit={this.props.onSubmit}>
            <div className="form-group mb-2">
              <label className="mb-1">Urgency level</label>
              <input
                type="text"
                className="form-control"
                name="u_level"
                onChange={this.props.onChange}
                value={this.props.formValues.u_level}
              />
            </div>
            <div className="form-group mb-2">
              <label className="mb-1">Matter</label>
              <input
                type="text"
                className="form-control"
                name="matter"
                onChange={this.props.onChange}
                value={this.props.formValues.matter}
              />
            </div>
            <div className="form-group mb-2">
              <label className="mb-1">Description.</label>
              <input
                type="text"
                className="form-control"
                name="description"
                onChange={this.props.onChange}
                value={this.props.formValues.description}
              />
            </div>
            <div className="form-group mb-2">
              <label className="mb-1">Date:</label>
              <input
                type="date"
                className="form-control"
                name="created_at"
                onChange={this.props.onChange}
                value={this.props.formValues.created_at}
              />
            </div>
            <button type="submit" className="Submit__button">
              Save
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default PostForm;
