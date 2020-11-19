import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ClassApp extends Component {
  static propTypes = {
    greet: PropTypes.string.isRequired,
    message: PropTypes.string,
  };

  static defaultProps = {
    message: 'fine',
  };

  render() {
    const { greet, message } = this.props;
    return (
      <div>
        <h1>{greet}</h1>
        <h1>{message}</h1>
        <input type="text" />
      </div>
    );
  }
}
