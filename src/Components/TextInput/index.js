import React from 'react';

const index = ({ ...rest }) => (
  <input
    {...rest}
    className="shadow border appearance-none rounded w-full py-2 px-3 mr-4 text-blue-900 "
  />
);

export default index;
