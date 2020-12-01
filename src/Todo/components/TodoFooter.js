import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import Button from '../../Components/Button';

const TodoFooter = ({ filter, status }) => (
  <div>
    <button
      type="text"
      name="all"
      onClick={filter}
      className={
        status === 'all'
          ? 'flex-no-shrink mr-4 p-2 border-2 rounded  w-1/4 bg-teal-900 text-white border-teal-900'
          : 'flex-no-shrink mr-4 p-2 border-2 rounded  w-1/4 bg-blue-300 text-teal-900 border-teal-900 hover:text-white hover:bg-teal-900'
      }>
      All to do
    </button>
    <button
      type="text"
      name="pending"
      onClick={filter}
      className={
        status === 'pending'
          ? 'flex-no-shrink mr-4 p-2 border-2 rounded  w-1/4 bg-teal-900 text-white border-teal-900'
          : 'flex-no-shrink mr-4 p-2 border-2 rounded  w-1/4 bg-blue-300 text-teal-900 border-teal-900 hover:text-white hover:bg-teal-900'
      }>
      Pending
    </button>
    <button
      type="text"
      name="completed"
      onClick={filter}
      className={
        status === 'completed'
          ? 'flex-no-shrink mr-4 p-2 border-2 rounded  w-1/4 bg-teal-900 text-white border-teal-900'
          : 'flex-no-shrink mr-4 p-2 border-2 rounded  w-1/4 bg-blue-300 text-teal-900 border-teal-900 hover:text-white hover:bg-teal-900'
      }>
      Completed
    </button>
  </div>
);

TodoFooter.propTypes = {
  status: PropTypes.string.isRequired,
  filter: PropTypes.func.isRequired,
};

TodoFooter.propTypes = {};

export default memo(TodoFooter);
