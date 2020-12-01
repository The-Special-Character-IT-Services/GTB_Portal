import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
// import Button from '../../Components/Button';

const Todolist = ({ todolist, status, onCompleteTodo, onDelTodo }) => {
  const onFilteredTodo = todolist.filter(todo => {
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
    onDelTodo: PropTypes.func.isRequired,
    todolist: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        isDone: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
      }),
    ).isRequired,
  };

  return (
    <div>
      {onFilteredTodo.map(todo => (
        <div key={todo.id} className="flex mb-4 items-center">
          <p className={classnames('w-full text-gray-900', { 'line-through': todo.isDone })}>
            {todo.text}
          </p>
          <button
            type="button"
            onClick={() => onCompleteTodo(todo.id)}
            className="flex-no-shrink justify-between p-2 me-2 ml-2 border-2 rounded w-1/4 text-gray-800 border-blue-800 hover:text-white hover:bg-green-600">
            {todo.isDone ? 'Not Done' : 'Done'}
          </button>
          <button
            type="button"
            onClick={() => {
              onDelTodo(todo);
            }}
            className="flex-no-shrink ml-2 p-2 border-2 rounded w-1/4 text text-gray-800 border-blue-800 hover:text-white hover:bg-green-600">
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};
export default memo(Todolist);
