import React from 'react';

const index = ({ ...rest }) => (
  <input
    {...rest}
    className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-900"
  />
);

export default index;
