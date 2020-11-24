import React, { memo } from 'react';

const Child1 = ({ data }) => {
  console.log('Child1');
  return <div>{data.name}</div>;
};

export default memo(Child1);
