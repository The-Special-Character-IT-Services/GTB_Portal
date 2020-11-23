import React, { memo } from 'react';
// import PropTypes from 'prop-types';

const child2 = ({ data }) => {
  console.log('====================================');
  console.log('child2');
  console.log('====================================');
  return <div> child2 </div>;
};

export default memo(child2);
