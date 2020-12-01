import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Child2 extends PureComponent {
  // shouldComponentUpdate(nextProps, nextState) {
  //     if(this.props !== nextProps) {
  //         return true;
  //     }
  //     return false;
  // }

  render() {
    console.log('Child2');
    return <div>Child2</div>;
  }
}
