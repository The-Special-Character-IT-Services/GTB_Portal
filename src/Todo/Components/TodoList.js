import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Components/Button';

const TodoList = ({ todolist, status, onCompleteTodo, onDelTodo }) => {
  const filteredData = todolist.filter(item => {
    switch (status) {
      case 'pending':
        return item.isDone;
      case 'completed':
        return !item.isDone;
      default:
        return true;
    }
  });

  TodoList.propTypes = {
    status: PropTypes.string.isRequired,
    onCompleteTodo: PropTypes.func.isRequired,
    onDelTodo: PropTypes.func.isRequired,
    todolist: PropTypes.arrayOf(
      PropTypes.shape({
        todotext: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        isDone: PropTypes.bool.isRequired,
      }),
    ).isRequired,
  };

  return (
    <div>
      {filteredData.map(todo => (
        <div key={todo.id}>
          <span>{todo.todotext}</span>
          <Button onClick={() => onCompleteTodo(todo.id)}>
            {todo.isDone ? 'Not Done' : 'Done'}
          </Button>
          <Button onClick={() => onDelTodo(todo.id)}>Remove</Button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
