import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';

class child1 extends PureComponent {
  render() {
    console.log('====================================');
    console.log('child 1');
    return <div>child1</div>;
  }
}

// child1.propTypes = {};

export default child1;
