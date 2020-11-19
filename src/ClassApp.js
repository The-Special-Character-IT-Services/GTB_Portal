import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class ClassApp extends Component {
  static propTypes = {
    greet: PropTypes.string.isRequired,
    message: PropTypes.string,
  };

  static defaultProps = {
    ans: 'fine',
  };

  render() {
    const { ask, ans } = this.props;
    return (
      <div>
        <h1>{ask}</h1>
        <h1>{ans}</h1>
        <input type='password' />
      </div>
    );
  }
}
