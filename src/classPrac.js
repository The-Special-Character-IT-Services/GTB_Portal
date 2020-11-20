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

  state = {
    string: 'String one',
    string1: 'String Two',
    textvalue: '',
  };

  onPress = () => {
    // this.setState({
    //   string: 'S0 changed',
    //   string1: 'S1 changed',
    // });
    alert(this.state.textvalue);
  };

  onChange = event => {
    this.setState({
      textvalue: event.target.value,
    });
  };

  render() {
    console.log('Anything');
    const { greet, message } = this.props;
    const { string, string1, textvalue } = this.state;
    return (
      <div>
        <h1>{string}</h1>
        <h1>{string1}</h1>
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
        Login here
        <input type="text" value={textvalue} onChange={this.onChange} />
        <button type="button" onClick={this.onPress}>
          Click me
        </button>
        <br />
        <br />
        Password
        <input type="Password" />
        <button type="button"> Don't Click me </button>
      </div>
    );
  }
}
