import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const index = ({ children, btnStyle, type, ...rest }) => (
  <button
    type={type}
    {...rest}
    style={{ borderRadius: '25px', outline: 'none' }}
    className={classnames('flex-no-shrink p-2 mr-2 rounded border-2 w-1/4', btnStyle, {
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
