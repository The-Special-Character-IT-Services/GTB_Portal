import React, { memo } from 'react';

const Child1 = () => {
  console.log('Child1');
  return <div>Child1</div>;
};

export default memo(Child1);
