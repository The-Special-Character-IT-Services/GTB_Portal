import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Components/Button';

const TodoFooter = ({ filter }) => (
  <div>
    <Button name="all" onClick={filter}>
      All Todo
    </Button>
    <Button name="pending" onClick={filter}>
      Pending Todo
    </Button>
    <Button name="completed" onClick={filter}>
      Completed Todo
    </Button>
  </div>
);

TodoFooter.propTypes = {
  filter: PropTypes.func.isRequired,
};

export default TodoFooter;
