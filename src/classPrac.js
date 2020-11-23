import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Child1 from './child1';
import Child2 from './child2';

// This is of mounting lifecycle
// constructor
// getDerivedStateFromProps
// render
// componentDidMount

// this is of updating lifecycle
// getDerivedStateFromProps
// shouldComponentUpdate
// render
// getSnapshotBeforeUpdate
// componentDidUpdate

// unmounting
// componentWillUnmount

// error handling
// getDerivedStateFromError
// componentDidCatch

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
      user: {
        firstname: 'Raj',
      },
      user2: {
        lastname: 'Patel',
      },
    };
    // console.log('in Constructor', props);
  }

  static getDerivedStateFromProps(props, state) {
    // console.log('getDerivedStateFromProps', props, state);
    return {
      ...state,
      myname: props.greet ? 'Raj' : '',
    };
  }

  componentDidMount() {
    // console.log('component did Mount');
    // console.log(document.getElementById('btn'));
    document.addEventListener('copy', data => {
      console.log(data);
    });
    // this.timer = setTimeout(() => {
    //   console.log('====================================');
    //   console.log('Hello');
    //   console.log('====================================');
    // }, 5000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.textvalue !== 'noob') {
      return true;
    }
    return false;
  }

  getSnapshotBeforeUpdate() {
    return 5;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {}

  componentWillUnmount() {
    document.removeEventListener('copy');
    clearTimeout(this.timer);
  }

  static getDerivedStateFromError(error) {
    return {};
  }

  componentDidCatch(error, info) {
    // save on serve
    logComponentStackToMyService(info.componentStack);
  }

  onPress = () => {
    this.state.user2.lastname = 'Clerk';
    this.setState({
      // immutably done
      user: { ...this.user, firstname: 'Micheal' },
      // mutably done
      user2: this.state.user2,
    });
    // this.setState({
    //   string: 'S0 changed',
    //   string1: 'S1 changed',
    // });
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
    const { string, string1, textvalue, myname, user, user2 } = this.state;
    return (
      <div>
        {/* <h1>{string}</h1>
        <h1>{string1}</h1>
        <h1>{myname}</h1>
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
        </h1> */}
        <h1>{user.firstname}</h1>
        <h1>{user2.lastname}</h1>
        <Child1 data={user} />
        <Child2 />
        <br />
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
