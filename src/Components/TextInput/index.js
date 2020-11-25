import React, { memo } from 'react';

const index = ({ ...rest }) => {
  console.log('Input Text Component');
  return (
    <input
      {...rest}
      className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-900"
    />
  );
};

export default memo(index);
