import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const index = ({ children, btnStyle, type, ...rest }) => (
  <button
    type={type}
    {...rest}
    className={classnames('flex-no-shrink p-2 border-2 rounded mr-2 ml-2 px-2  w-1/4', btnStyle, {
      'text-purple-900 border-purple-900 hover:text-white hover:bg-purple-900': !btnStyle,
    })}>
    {children}
  </button>
);

index.propTypes = {
  btnStyle: PropTypes.string,
  type: PropTypes.string,
};

index.defaultprops = {
  btnStyle: '',
  type: 'button',
};

export default index;
