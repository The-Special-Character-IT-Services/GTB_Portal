import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';
import TodoFooter from './Components/TodoFooter';

export default class Todo extends PureComponent {
  state = {
    todolist: [],
    status: 'all',
    error: false,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/TodoList');
      const todolist = await response.json();
      this.setState({
        todolist,
      });
    } catch (error) {
      this.setState({
        error: error.message,
      });
    }
  };

  addData = async body => {
    try {
      const response = await fetch('http://localhost:3000/TodoList', {
        method: 'POST',
        body,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      const todoItem = await response.json();
      const { todolist } = this.state;
      this.setState({
        todolist: [todoItem, ...todolist],
      });
    } catch (error) {
      this.setState({
        error: error.message,
      });
    }
  };

  onAddTodo = (event, todotext) => {
    event.preventDefault();
    this.addData(JSON.stringify({ todotext, isDone: false }));
  };

  UpdateData = async body => {
    try {
      const response = await fetch(`http://localhost:3000/TodoList/${body.id}`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      const todoItem = await response.json();
      const { todolist } = this.state;
      const i = todolist.findIndex(x => x.id === body.id);
      this.setState({
        todolist: [...todolist.slice(0, i), todoItem, ...todolist.slice(i + 1)],
      });
    } catch (error) {
      this.setState({
        error: error.message,
      });
    }
  };

  deleteData = async id => {
    try {
      await fetch(`http://localhost:3000/TodoList/${id}`, {
        method: 'DELETE',
      });
    } catch (error) {
      this.setState({
        error: error.message,
      });
    }
  };

  onCompleteTodo = id => {
    const { todolist } = this.state;
    const i = todolist.findIndex(x => x.id === id);
    this.UpdateData({ ...todolist[i], isDone: !todolist[i].isDone });
  };

  onDelTodo = id => {
    const { todolist } = this.state;
    const i = todolist.findIndex(x => x.id === id);
    this.deleteData(id);
    this.setState({
      todolist: [...todolist.slice(0, i), ...todolist.slice(i + 1)],
    });
  };

  filter = event => {
    this.setState({
      status: event.target.name,
    });
  };

  render() {
    const { todolist, status, error } = this.state;
    if (error) {
      return <div>{error}</div>;
    }
    return (
      <div>
        {/* {error && <div>{error}</div>} */}
        <TodoForm onAddTodo={this.onAddTodo} />
        <TodoList
          todolist={todolist}
          status={status}
          onCompleteTodo={this.onCompleteTodo}
          onDelTodo={this.onDelTodo}
        />
        <TodoFooter status={status} filter={this.filter} />
      </div>
    );
  }
}
