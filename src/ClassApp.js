import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Child1 from './Child1';
import Child2 from './Child2';

// props value change
// stae valuee change

// mounting lifecyle
// -> constructor
// -> getDerivedStateFromProps
// -> render
// -> componentDidMount

// Updating lifecycle method
// -> getDerivedStateFromProps
// -> shouldComponentUpdate
// -> render
// -> getSnapshotBeforeUpdate
// -> componentDidUpdate

// unmounting
// -> componentWillUnmount

// error handling
// -> getDerivedStateFromError
// -> componentDidCatch

export default class ClassApp extends Component {
  static propTypes = {
    greet: PropTypes.string.isRequired,
    message: PropTypes.string,
  };

  static defaultProps = {
    message: 'fine',
  };
  // state = {}

  constructor(props) {
    // call only 1nce
    super(props);
    // console.log(props);
    this.state = {
      text: props.greet,
      text1: props.message,
      textValue: '',
      user: {
        name: 'Yagensh',
      },
    };
  }

  static getDerivedStateFromProps(props, state) {
    // console.log('getDerivedStateFromProps', props, state);
    return {
      ...state,
      name: props.greet ? 'Yagnesh' : '',
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    // if (nextState.textValue !== 'bitch') {
    //   return true;
    // }
    // return false;
    return true;
  }

  componentDidMount() {
    // call only 1nce
    // throw ne Error('err');
    // console.log('componentDidMount');
    // console.log(document.getElementById('btn'));
    // document.addEventListener('mousemove', data => {
    //   console.log(data);
    // });
    this.timer = setTimeout(() => {
      // console.log('hello');
    }, 10000);

    // api call
  }

  getSnapshotBeforeUpdate() {
    return 10;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {}

  componentWillUnmount() {
    // document.removeEventListener('mousemove');
    // clearTimeout(this.timer);
  }

  static getDerivedStateFromError(error) {
    return {};
  }

  componentDidCatch(error, info) {
    // save on serve
    // logComponentStackToMyService(info.componentStack);
  }

  onClick = () => {
    this.state.user.name = 'rohit';
    this.setState({
      user: this.state.user,
    });
    // this.setState({
    //   text: 'Text Changed',
    // });
    // alert(this.state.textValue);
  };

  onChangeText = event => {
    this.setState({
      textValue: event.target.value,
    });
  };

  render() {
    console.log('Class App');
    // const { greet, message } = this.props;
    const { text, text1, textValue, name, user } = this.state;
    return (
      <div>
        {/* <h1>{text}</h1> */}
        {/* <h1>{text1}</h1> */}
        <h1>{user.name}</h1>
        <Child1 data={user} />
        <Child2 />
        {/* <h1>{greet}</h1> */}
        {/* <h1>{message}</h1> */}
        <input type="text" value={textValue} onChange={this.onChangeText} />
        <button id="btn" type="button" onClick={this.onClick}>
          Click Me
        </button>
      </div>
    );
  }
}
