// This is our login view layout
import React, { Component } from 'react';

import { Link, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { login } from '../../actions/auth';

export class Login extends Component {
  state = {
    username: '',
    password: '',
  };
// static prop types, not necessary but nice to have
  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };
// onsubmit function for loging in
  onSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password);
  };
// on change function for loging in
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    const { username, password } = this.state;
    return (
      <div className="col-md-6 m-auto">
        <div className="card card-body mt-5">
          <h2 className="text-center">Login</h2>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Enter Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                onChange={this.onChange}
                value={username}
              />
            </div>

            <div className="form-group">
              <label>Enter Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={this.onChange}
                value={password}
              />
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Enter
              </button>
            </div>
            <p>
              Need an account? <Link to="/register">Sign Up</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
// map state to props
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
