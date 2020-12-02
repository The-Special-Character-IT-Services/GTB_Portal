import React from 'react';
import PropTypes from 'prop-types';

const TodoFooter = ({ filter, status }) => (
  <div>
    <button
      name="all"
      style={{ backgroundColor: status === 'all' ? 'red' : 'white' }}
      onClick={filter}>
      Add Task
    </button>
    <button
      name="pending"
      style={{ backgroundColor: status === 'pending' ? 'red' : 'white' }}
      onClick={filter}>
      Pending
    </button>
    <button
      name="completed"
      style={{ backgroundColor: status === 'completed' ? 'red' : 'white' }}
      onClick={filter}>
      Completed
    </button>
  </div>
);

TodoFooter.propTypes = {
  status: PropTypes.string.isRequired,
  filter: PropTypes.func.isRequired,
};

export default TodoFooter;
