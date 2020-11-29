import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from '../../Components/Buttons';

const Todolist = ({ todolist, status, onCompleteTodo, deleteTodo }) => {
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
    deleteTodo: PropTypes.func.isRequired,
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
      {filteredData.map(todo => (
        <div key={todo.id} className="flex mt-4 items-center">
          <p
            className={classnames('w-full text-gray-900 font-sans', {
              'line-through': todo.isDone,
            })}>
            {todo.text}
          </p>
          <Button
            btnStyle="mr-2 mb-4 text-green-600 border-green-600 hover:text-white hover:bg-green-600 "
            onClick={() => onCompleteTodo(todo.id)}>
            {todo.isDone ? 'Not Done' : 'Done'}
          </Button>
          <Button
            btnStyle="mr-2 mb-4 text-red-600 border-red-600 hover:text-white hover:bg-red-600 "
            onClick={() => deleteTodo(todo.id)}>
            Remove
          </Button>
        </div>
      ))}
    </div>
  );
};
export default memo(Todolist);
