// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import Child1 from './child1';
// import Child2 from './child2';

// export default class ClassApp extends Component {
//   static propTypes = {
//     ask: PropTypes.string.isRequired,
//     ans: PropTypes.string,
//   };

//   static defaultProps = {
//     ans: 'fine',
//   };

//   constructor(props) {
//     super(props);
//     console.log(props);
//     this.state = {
//       text: props.ask,
//       text1: props.ans,
//       textValue: '',
//       user: {
//         name: 'harsh',
//       },
//       user2: {
//         name: 'patel',
//       },
//     };
//   }

//   static getDerivedStateFromProps(props, state) {
//     console.log('getDerivedStateFromProps', props, state);
//     return {
//       ...state,
//       name: props.ask ? 'harsh' : '',
//     };
//   }

//   componentDidMount() {
//     console.log('componentDidMount');
//     console.log(document.getElementById('btn'));
//   }

//   static getDerivedStateFromError(error) {
//     return {};
//   }

//   componentDidCatch(error, info) {
//     logComponentStackToMyService(info.componentStack);
//   }

//   onClick = () => {
//     this.state.user.name = 'patel';
//     this.setState({
//       user2: { ...this.user2, name: 'harsh' },
//     });
//   };
//   onChangeText = event => {
//     this.setState({
//       textValue: event.target.value,
//     });
//   };
//   render() {
//     console.log('render method');
//     const { text, text1, textValue, name, user, user2 } = this.state;

//     return (
//       <div>
//         <h1>{user.name}</h1>
//         <h1>{user2.name}</h1>
//         <Child1 data={user} />
//         <Child2 />
//         <input type='text' value={textValue} onChange={this.onChangeText} />
//         <button id='btn' type='button' onClick={this.onClick}>
//           Click
//         </button>
//       </div>
//     );
//   }
// }
