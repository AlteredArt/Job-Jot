// Basic layout for the form view
import React, { Component } from 'react';

import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { addLead } from '../../actions/leads';

export class Form extends Component {
  state = {
    name: '',
    email: '',
    message: '',
  };

  static propTypes = {
    addLead: PropTypes.func.isRequired,
  };
// on change function
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
// onsubmit function
  onSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = this.state;
    const lead = { name, email, message };
    this.props.addLead(lead);
    this.setState({
      name: '',
      email: '',
      message: '',
    });
  };

  render() {
    const { name, email, message } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add a Entry</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Lead Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div>
            <div className="form-group">
              <label>Lead Email</label>
              <input
                className="form-control"
                type="email"
                name="email"
                onChange={this.onChange}
                value={email}
              />
            </div>
            <div className="form-group">
              <label>Reminder Message</label>
              <textarea
                className="form-control"
                type="text"
                name="message"
                onChange={this.onChange}
                value={message}
              />
            </div>
            <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Add Entry
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default connect(null, { addLead })(Form);
