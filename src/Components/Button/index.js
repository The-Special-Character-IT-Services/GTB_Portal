import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const index = ({ children, btnStyle, type, ...rest }) => (
  <button
    type={type}
    {...rest}
    className={classnames(
      'flex-no-shrink mt-3 p-2 justify-between border-2 rounded  mr-2 ',
      btnStyle,
      {
        'bg-gray-500 text-gray-900 border-blue-900 hover:text-white hover:bg-red-400 ': !btnStyle,
      },
    )}>
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

export default index;
