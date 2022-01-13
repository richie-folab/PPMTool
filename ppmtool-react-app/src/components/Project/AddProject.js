import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProject } from "../../actions/projectActions";
import { createBrowserHistory } from "history";
import classnames from "classnames";

class AddProject extends Component {
  constructor() {
    super();

    //Initialize the state variables
    this.state = {
      projectName: "",
      projectIdentifier: "",
      description: "",
      startDate: "",
      endDate: "",
      errors: {},
    };

    //bind all the controls to the respective events
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  //Lifecycle Hook
  //If the component receives any error, set the error to the errors state variable
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit(e) {
    e.preventDefault();

    const newProject = {
      projectName: this.state.projectName,
      projectIdentifier: this.state.projectIdentifier,
      description: this.state.description,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
    };

    const browserHistory = createBrowserHistory();

    this.props.createProject(newProject, browserHistory);
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="project">
        {
          //check name attribute input fields
          //create constructor
          //set state
          //set value on input fields
          //create onChange function
          //bind on constructor
          //check state change in react extension
        }
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h5 className="display-4 text-center">Create Project Form</h5>
              <hr />
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.projectName,
                    })}
                    placeholder="Project Name"
                    name="projectName"
                    value={this.state.projectName}
                    onChange={this.onChange}
                  />
                  <p>{errors.projectName}</p>
                </div>
                <br />
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Unique Project ID"
                    name="projectIdentifier"
                    value={this.state.projectIdentifier}
                    onChange={this.onChange}
                  />
                  <p>{errors.projectIdentifier}</p>
                </div>
                <br />
                <div className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    placeholder="Project Description"
                    name="description"
                    value={this.state.description}
                    onChange={this.onChange}
                  ></textarea>
                  <p>{errors.description}</p>
                </div>
                <br />
                <h6>Start Date</h6>
                <div className="form-group">
                  <input
                    type="date"
                    className="form-control form-control-lg"
                    name="startDate"
                    value={this.state.startDate}
                    onChange={this.onChange}
                  />
                </div>
                <br />
                <h6>Estimated End Date</h6>
                <div className="form-group">
                  <input
                    type="date"
                    className="form-control form-control-lg"
                    name="endDate"
                    value={this.state.endDate}
                    onChange={this.onChange}
                  />
                </div>
                <br />
                <input
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddProject.propTypes = {
  createProject: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

//If there is any error, map  the error state variable to Props
const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, { createProject })(AddProject);
