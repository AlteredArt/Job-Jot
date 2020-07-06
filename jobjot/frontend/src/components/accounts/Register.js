// Register component layout
import React, { Component } from 'react';

import { Link, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { register } from '../../actions/auth';

import { createMessage } from '../../actions/messages';

export class Register extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    password2: '',
  };
// static prop types again not necessary
  static propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };
// on submit handler for the registry
  onSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, password2 } = this.state;
    if (password !== password2) {
      this.props.createMessage({ passwordNotMatch: 'Passwords do not match' });
    } else {
      const newUser = {
        username,
        password,
        email,
      };
      this.props.register(newUser);
    }
  };
// on change function for registering
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    const { username, email, password, password2 } = this.state;
    return (
      <div className="col-md-6 m-auto">
        <div className="card card-body mt-5">
          <h2 className="text-center">Sign-Up</h2>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Enter Desired Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                onChange={this.onChange}
                value={username}
              />
            </div>

            <div className="form-group">
              <label>& Your Personal Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={this.onChange}
                value={email}
              />
            </div>

            <div className="form-group">
              <label> New Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={this.onChange}
                value={password}
              />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control"
                name="password2"
                onChange={this.onChange}
                value={password2}
              />
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
            </div>
            <p>
              Already a member? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register, createMessage })(Register);
