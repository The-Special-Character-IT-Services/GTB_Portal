import React, { Component } from 'react';
import PropTypes from 'prop-types';

// props value change
// stae valuee change

export default class ClassApp extends Component {
  static propTypes = {
    greet: PropTypes.string.isRequired,
    message: PropTypes.string,
  };

  static defaultProps = {
    message: 'fine',
  };

  state = {
    text: 'Text 0',
    text1: 'Text 1',
    textValue: '',
  };

  onClick = () => {
    // this.setState({
    //   text: 'Text Changed',
    // });
    alert(this.state.textValue);
  };

  onChangeText = event => {
    this.setState({
      textValue: event.target.value,
    });
  };

  render() {
    console.log('render method');
    const { greet, message } = this.props;
    const { text, text1, textValue } = this.state;
    return (
      <div>
        <h1>{text}</h1>
        <h1>{text1}</h1>
        <h1>{greet}</h1>
        <h1>{message}</h1>
        <input type="text" value={textValue} onChange={this.onChangeText} />
        <button type="button" onClick={this.onClick}>
          Click Me
        </button>
      </div>
    );
  }
}
