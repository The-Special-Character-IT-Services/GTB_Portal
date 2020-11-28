import React, { memo } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const index = ({ children, btnStyle, type, ...rest }) => (
  <button
    type={type}
    {...rest}
    className={classnames('flex-no-shrink p-2 border-2 rounded mr-2 ml-2 px-2  w-1/4', btnStyle, {
      'text-purple-700 border-purple-700 hover:text-white hover:bg-purple-700': !btnStyle,
    })}>
    {children}
  </button>
);

index.propTypes = {
  btnStyle: PropTypes.string,
  type: PropTypes.string,
};

index.defaultProps = {
  btnStyle: '',
  type: 'button',
};

export default memo(index);
