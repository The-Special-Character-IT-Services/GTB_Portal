import React, { Component } from 'react';
// import classnames from 'classnames';
// import Button from '../Components/Button';
// import TextInput from '../Components/TextInput';
import TodoFooter from './components/TodoFooter';
import TodoForm from './components/TodoForm';
import Todolist from './components/TodoList';
// import PropTypes from 'prop-types';

export default class Todo extends Component {
  static propTypes = {};

  state = {
    todolist: [],
    status: 'all',
    error: '',
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const data = await fetch('http://localhost:3000/TodoList');
      const todolist = await data.json();
      this.setState({
        todolist,
      });
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  addData = async body => {
    try {
      const data = await fetch('http://localhost:3000/TodoList', {
        method: 'POST',
        body,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      const todoItem = await data.json();
      const { todolist } = this.state;
      this.setState({
        todolist: [todoItem, ...todolist],
      });
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  onAddTodo = (event, todotext) => {
    try {
      event.preventDefault();
      if (todotext) {
        this.addData(JSON.stringify({ text: todotext, isDone: false }));
        this.setState({
          error: '',
        });
      } else {
        this.setState({
          error: 'Please add Text',
        });
      }
    } catch (error) {
      this.setState({
        error: error.message,
      });
    }
  };

  // onChangeText = event => {
  //   event.preventDefault();
  //   this.setState({
  //     todotext: event.target.value,
  //   });
  // };

  onDelTodo = ToBeDeleted => {
    const { todolist } = this.state;
    this.setState({
      todolist: todolist.filter(el => el !== ToBeDeleted),
    });
  };

  filter = event => {
    this.setState({
      status: event.target.name,
    });
  };

  // onFilteredTodo = () => {
  //   const { todolist, status } = this.state;
  //   return todolist.filter(todo => {
  //     switch (status) {
  //       case 'completed':
  //         return todo.isDone;
  //       case 'pending':
  //         return !todo.isDone;
  //       default:
  //         return true;
  //     }
  //   });
  // };

  onCompleteTodo = id => {
    const { todolist } = this.state;
    const i = todolist.findIndex(x => x.id === id);
    this.setState({
      todolist: [
        ...todolist.slice(0, i),
        { ...todolist[i], isDone: !todolist[i].isDone },
        ...todolist.slice(i + 1),
      ],
    });
  };

  render() {
    const { todolist, status, error } = this.state;
    return (
      <div className="h-screen flex justify-center items-center w-full bg-green-700 font-sans">
        <div className="bg-blue-500 rounded shadow p-6 m-4 w-full lg:w-2/3 lg:max-lg">
          <TodoForm onAddTodo={this.onAddTodo} />
          {error && <div>{error}</div>}
          <Todolist
            onCompleteTodo={this.onCompleteTodo}
            status={status}
            todolist={todolist}
            onDelTodo={this.onDelTodo}
          />
          <TodoFooter status={status} filter={this.filter} />
        </div>
      </div>
    );
  }
}
// Todo.propTypes = {};
