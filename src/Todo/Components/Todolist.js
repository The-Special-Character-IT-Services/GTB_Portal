import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from '../../Components/Button';

const Todolist = ({ todolist, status, onCompleteTodo, deletetodo }) => {
  const filteredData = todolist.filter(todo => {
    switch (status) {
      case 'completed':
        return todo.isDone;
      case 'pending':
        return !todo.isDone;
      default:
        return true;
    }
  });

  Todolist.propTypes = {
    status: PropTypes.string.isRequired,
    onCompleteTodo: PropTypes.func.isRequired,
    deletetodo: PropTypes.func.isRequired,
    todolist: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        isDone: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
      }).isRequired,
    ),
  };

  Todolist.defaultProps = {
    todolist: [],
  };

  return (
    <div>
      {filteredData.map(todo => (
        <div key={todo.id} className="flex mt-4 items-center">
          <p
            className={classnames('w-full text-gray-900', {
              'line-through': todo.isDone,
            })}>
            {todo.text}
          </p>
          <Button
            btnStyle=" text-green-900 mr-2 mb-4 border-green-900 hover:text-white hover:bg-green-900"
            onClick={() => onCompleteTodo(todo.id)}>
            {todo.isDone ? 'not done' : 'done'}
          </Button>
          <Button
            btnStyle="text-red-900 mr-2 mb-4 border-red-900 hover:text-white hover:bg-red-900"
            onClick={() => deletetodo(todo.id)}>
            Remove
          </Button>
        </div>
      ))}
    </div>
  );
};

export default memo(Todolist);
