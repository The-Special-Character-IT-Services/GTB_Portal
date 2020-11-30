import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Button from '../../Components/Button';

const Todofooter = ({ filter, status }) => (
  <div>
    <Button
      name="all"
      btnStyle={status === 'all' ? 'text-white bg-blue-700 border-blue-700' : ''}
      onClick={filter}>
      All Task
    </Button>
    <Button
      name="pending"
      btnStyle={status === 'pending' ? 'text-white bg-blue-700 border-blue-700' : ''}
      onClick={filter}>
      Pending Task
    </Button>
    <Button
      name="completed"
      btnStyle={status === 'completed' ? 'text-white bg-blue-700 border-blue-700' : ''}
      onClick={filter}>
      Completed Task
    </Button>
  </div>
);

Todofooter.propTypes = {
  status: PropTypes.string.isRequired,
  filter: PropTypes.func.isRequired,
};

Todofooter.propTypes = {};

export default memo(Todofooter);
