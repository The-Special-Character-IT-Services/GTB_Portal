import React, { PureComponent } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import TodoFooter from './components/TodoFooter';

export default class todo extends PureComponent {
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
      const data = await fetch('http://localhost:3000/todoList');
      const todolist = await data.json();
      this.setState({
        todolist,
      });
    } catch (error) {
      this.setState({ error });
    }
  };

  addData = async body => {
    try {
      const data = await fetch('http://localhost:3000/todoList', {
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
      this.setState({ error });
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
      <div className="h-screen w-full flex justify-center items-center bg-green-300  font-sans">
        <div className="bg-white rounded-3xl shadow p-3 m-4 w-full lg:w-1/2 ">
          <TodoForm onAddTodo={this.onAddTodo} />
          {error && <div>{error}</div>}
          <TodoList
            onCompleteTodo={this.onCompleteTodo}
            status={status}
            todolist={todolist}
            deleteTodo={this.deleteTodo}
          />
          <TodoFooter status={status} filter={this.filter} />
        </div>
      </div>
    );
  }
}
