import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ClassApp extends Component {
  static defaultProps = {
    ans: 'fine',
  };
  state = {
    text: 'hello',
    text1: 'text1',
    text2: '',
  };
  onClick = () => {
    alert(this.state.text2);
    // this.setState({
    //   // text: 'text changed',
    // });
  };
  onChange = event => {
    this.setState({ text2: event.target.value });
  };
  render() {
    console.log('render method');
    const { ask, ans } = this.props;
    const { text, text1, text2 } = this.props;

    return (
      <div>
        <h1>{text}</h1>
        <h1>{ask}</h1>
        <h1>{ans}</h1>
        <h1>{text1}</h1>
        <button type='button' onClick={this.onClick}>
          click me
        </button>
        <input type='text' value={text} onChange={this.onChange} />
      </div>
    );
  }
}
