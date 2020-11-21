import React, { Component } from 'react';
import PropTypes from 'prop-types';

// This is of mounting lifecycle
// constructor
// getDerivedStateFromProps
// render
// componentDidMount

// this is of updating lifecycle
// getDerivedStateFromProps
// shouldComponentUpdate
// render
// componentDidUpdate

export default class ClassApp extends Component {
  static propTypes = {
    greet: PropTypes.string.isRequired,
    message: PropTypes.string,
  };

  static defaultProps = {
    message: 'i am good',
  };

  // state = {};

  constructor(props) {
    // call only once
    super(props);
    this.state = {
      string: props.greet,
      string1: props.message,
      textvalue: '',
    };
    console.log('in Constructor', props);
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps', props, state);
    return {
      ...state,
      myname: props.greet ? 'Raj' : '',
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
    console.log(document.getElementById('btn'));
    document.addEventListener('copy', data => {
      console.log(data);
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.textvalue !== '') {
      return true;
    }
    return false;
  }

  onPress = () => {
    this.setState({
      string: 'S0 changed',
      string1: 'S1 changed',
    });
    // alert(this.state.textvalue);
  };

  onChangeString = event => {
    this.setState({
      textvalue: event.target.value,
    });
  };

  render() {
    console.log('In Render');
    const { greet, message } = this.props;
    const { string, string1, textvalue, myname } = this.state;
    return (
      <div>
        <h1>{string}</h1>
        <h1>{string1}</h1>
        <h1>{myname}</h1>
        {/* <h1
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
        </h1> */}
        Login here
        <input type="text" value={textvalue} onChange={this.onChangeString} />
        <button id="btn" type="button" onClick={this.onPress}>
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
