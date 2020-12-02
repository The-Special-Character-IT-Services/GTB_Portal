import React from 'react';

const index = ({ children, ...rest }) => <button {...rest}>{children}</button>;

export default index;
