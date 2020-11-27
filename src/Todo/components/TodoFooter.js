import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Components/Button';

const TodoFooter = ({ filter, status }) => (
  <div>
    <Button name="all" btnStyle={status === 'all' ? 'text-white bg-teal-900' : ''} onClick={filter}>
      All Todo
    </Button>
    <Button
      name="pending"
      btnStyle={status === 'pending' ? 'text-white bg-teal-900' : ''}
      onClick={filter}>
      Pending Todo
    </Button>
    <Button
      name="completed"
      btnStyle={status === 'completed' ? 'text-white bg-teal-900' : ''}
      onClick={filter}>
      Completed Todo
    </Button>
  </div>
);

TodoFooter.propTypes = {
  status: PropTypes.string.isRequired,
  filter: PropTypes.func.isRequired,
};

export default TodoFooter;
