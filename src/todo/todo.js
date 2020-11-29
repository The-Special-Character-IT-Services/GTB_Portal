// Mounting lifecycle
// constructor
// getDerivedStateFromProps
// render
// componentDidMount

// Updating lifecycle
// getDerivedStateFromProps
// shouldComponentUpdate
// render
// getSnapshotBeforeUpdate
// componentDidUpdate

// Unmounting lifecycle
// componentWillUnmount

// Error handling lifecycle
// getDerivedStateFromError
// componentDidCatch

import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import Todoform from './Components/Todoform';
import Todolist from './Components/Todolist';
import Todofooter from './Components/Todofooter';

export default class todo extends PureComponent {
  state = {
    todolist: [],
    status: 'all',
    error: '',
  };

  onAddTodo = (event, todotext) => {
    const { todolist } = this.state;
    try {
      event.preventDefault();
      if (todotext) {
        this.setState({
          todolist: [...todolist, { text: todotext, isDone: false, id: new Date().valueOf() }],
          error: '',
        });
      } else {
        this.setState({
          error: 'Please Type Something',
        });
      }
    } catch (error) {
      this.setState({
        error: error.message,
      });
    }
  };

  onCompleteTodo = id => {
    try {
      const { todolist } = this.state;
      const i = todolist.findIndex(x => x.id === id);
      this.setState({
        todolist: [
          ...todolist.slice(0, i),
          { ...todolist[i], isDone: !todolist[i].isDone },
          ...todolist.slice(i + 1),
        ],
      });
    } catch (error) {
      this.setState({
        error: error.message,
      });
    }
  };

  deleteTodo = id => {
    try {
      const { todolist } = this.state;
      const i = todolist.findIndex(x => x.id === id);
      this.setState({
        todolist: [...todolist.slice(0, i), ...todolist.slice(i + 1)],
      });
    } catch (error) {
      this.setState({
        error: error.message,
      });
    }
  };

  filter = event => {
    try {
      this.setState({
        status: event.target.name,
      });
    } catch (error) {
      this.setState({
        error: error.message,
      });
    }
  };

  render() {
    const { todolist, status, error } = this.state;
    return (
      <div className=" h-screen w-full flex justify-center items-center font-sans bg-green-400 ">
        <div
          style={{ borderRadius: '25px' }}
          className="bg-white m-4 rounded shadow p-6 w-full lg:w-1/2 ">
          <Todoform onAddTodo={this.onAddTodo} />
          {error && <div>{error}</div>}
          <Todolist
            onCompleteTodo={this.onCompleteTodo}
            status={status}
            todolist={todolist}
            deleteTodo={this.deleteTodo}
          />
          <Todofooter status={status} filter={this.filter} />
        </div>
      </div>
    );
  }
}

// todo.propTypes = {};
