/* eslint-disable react/static-property-placement */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ClassApp extends Component {
  static propTypes = {
    ear: PropTypes.string.isRequired,
    advice: PropTypes.string,
  };

  static defaultProps = {
    advice: 'fine',
  };

  render() {
    const { ear, advice } = this.props;
    return (
      <div>
        <h1>{ear}</h1>
        <h1>{advice}</h1>
        <input type="password" />
      </div>
    );
  }
}
