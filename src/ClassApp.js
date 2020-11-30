// /* eslint-disable react/static-property-placement */
// /* eslint-disable react/prefer-stateless-function */
// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import Child1 from './child1';
// import Child2 from './child2';

// export default class ClassApp extends Component {
//   static propTypes = {
//     ear: PropTypes.string.isRequired,
//     advice: PropTypes.string,
//   };

//   static defaultProps = {
//     advice: 'fine',
//   };

//   // state = {};

//   constructor(props) {
//     // call only once
//     super(props);
//     this.state = {
//       rams: props.ear,
//       rams1: props.advice,
//       textvalue: '',
//       user: {
//         name: 'Yashdeep',
//       },
//       user2: {
//         name: 'Patel',
//       },
//     };
//     console.log('constructor', props);
//   }

//   static getDerivedStateFromProps(props, state) {
//     console.log('getDerivedStateFromProps', props, state);
//     return {
//       ...state,
//       feeling: props.ear ? 'Awesome' : '',
//     };
//   }

//   // componentDidMount() {
//   //   // console.log('componentDidMount');
//   //   // console.log(document.getElementById('btn'));
//   //   // document.addEventListener('copy', data => {
//   //   //   console.log(data);
//   //   });
//   // }

//   // shouldComponentUpdate(nextProps, nextState) {
//   //   if (nextState.textvalue !== '') {
//   //     return true;
//   //   }
//   //   return false;
//   // }

//   // onClicktext = () => {
//   //   this.state.user.name = 'yash';
//   //   this.setState({
//   //     user2: { ...this.user, name: 'yashu' },
//   //     // mutably
//   //     user: this.state.user,
//   //     // rams: 'Omega 1',
//   //     // rams1: 'Omega 2',
//   //   });
//   // };

//   // alert(this.state.qwe)
//   OnChangerams = event => {
//     this.setState({
//       textvalue: event.target.value,
//     });
//   };

//   render() {
//     console.log('Class App');
//     // const { ear, advice } = this.props;
//     const { textvalue, user, user2 } = this.state;
//     return (
//       <div>
//         {/* <h1>{rams}</h1>
//         <h1>{rams1}</h1>
//         <h1>{feeling}</h1> */}
//         <h1>{user.name}</h1>
//         <h1>{user2.name}</h1>
//         <Child1 />
//         <Child2 data={user} />
//         <input type="text" value={textvalue} onChange={this.OnChangerams} />
//         <button id="btn" type="button" onClick={this.onClicktext}>
//           click me
//         </button>
//       </div>
//     );
//   }
// }
