import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from '../../Components/Button';

const TodoList = ({ todoList, status, onCompleteTodo, deleteTodo }) => {
  const filteredData = todoList.filter(todo => {
    switch (status) {
      case 'completed':
        return todo.isDone;
      case 'pending':
        return !todo.isDone;
      default:
        return true;
    }
  });
  return (
    <div>
      {filteredData.map(todo => (
        <div key={todo.id} className="flex mb-4 items-center">
          <p
            className={classnames('w-full text-gray-900', {
              'line-through': todo.isDone,
            })}>
            {todo.text}
          </p>
          <Button btnStyle="mr-2" onClick={() => onCompleteTodo(todo.id)}>
            {todo.isDone ? 'Not Done' : 'Done'}
          </Button>
          <Button onClick={() => deleteTodo(todo.id)}>Remove</Button>
        </div>
      ))}
    </div>
  );
};

TodoList.propTypes = {
  status: PropTypes.string.isRequired,
  onCompleteTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      isDone: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default memo(TodoList);
