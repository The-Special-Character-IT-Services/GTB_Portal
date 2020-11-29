import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Button from '../../Components/Buttons';

const Todofooter = ({ filter, status }) => (
  <div>
    <Button
      name="all"
      btnStyle={status === 'all' ? 'text-white bg-purple-700 border-purple-700' : ''}
      onClick={filter}>
      All Task
    </Button>
    <Button
      name="pending"
      btnStyle={status === 'pending' ? 'text-white bg-purple-700 border-purple-700' : ''}
      onClick={filter}>
      Pending Task
    </Button>
    <Button
      name="completed"
      btnStyle={status === 'completed' ? 'text-white bg-purple-700 border-purple-700' : ''}
      onClick={filter}>
      Completed Task
    </Button>
  </div>
);

Todofooter.propTypes = {
  status: PropTypes.string.isRequired,
  filter: PropTypes.func.isRequired,
};

export default memo(Todofooter);
