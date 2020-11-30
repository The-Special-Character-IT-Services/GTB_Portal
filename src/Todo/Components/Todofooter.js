import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Components/Button';

const Todofooter = ({ filter, status }) => (
  <div>
    <Button
      name="all"
      btnStyle={status === 'all' ? 'bg-green-500 text-white border-green-500' : ''}
      onClick={filter}>
      All todo
    </Button>
    <Button
      name="pending"
      btnStyle={status === 'pending' ? 'bg-green-500 text-white border-green-500' : ''}
      onClick={filter}>
      Pending todo
    </Button>
    <Button
      name="completed"
      btnStyle={status === 'completed' ? 'bg-green-500 text-white border-green-500' : ''}
      onClick={filter}>
      Completed todo
    </Button>
  </div>
);

Todofooter.propTypes = {
  filter: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
};

export default Todofooter;
