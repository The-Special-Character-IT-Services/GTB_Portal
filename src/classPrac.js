/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/static-property-placement */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ClassApp extends Component {
  static propTypes = {
    greet: PropTypes.string.isRequired,
    message: PropTypes.string,
  };

  static defaultProps = {
    message: 'i am good',
  };

  render() {
    const { greet, message } = this.props;
    return (
      <div>
        <h1
          style={{
            color: 'red',
            backgroundColor: 'blue',
            textAlign: 'center',
          }}>
          {greet}
        </h1>
        <h1
          style={{
            textAlign: 'center',
          }}>
          {message}
        </h1>
        Login here <input type="text" />
        <br />
        <br />
        Password <input type="Password" />
      </div>
    );
  }
}
