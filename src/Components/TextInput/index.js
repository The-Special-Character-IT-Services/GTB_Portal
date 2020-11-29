import React, { memo } from 'react';
// import PropTypes from 'prop-types';

const index = ({ ...rest }) => (
  <input
    {...rest}
    placeholder="Enter text"
    style={{ borderRadius: '25px', outline: 'none' }}
    className=" hover:bg-yellow-100 rounded shadow border-2 appearance-none text-gray-900 w-full py-2 px-2 mr-4 "
  />
);

export default memo(index);
