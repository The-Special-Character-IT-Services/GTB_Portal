import React, { PureComponent } from 'react';
import TodoFooter from './components/TodoFooter';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

export default class index extends PureComponent {
  static propTypes = {};

  state = {
    todoList: [],
    status: 'all',
    error: '',
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const data = await fetch('http://localhost:3000/todoList');
      const todoList = await data.json();
      this.setState({
        todoList,
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
      const { todoList } = this.state;
      this.setState({
        todoList: [todoItem, ...todoList],
      });
    } catch (error) {
      this.setState({ error });
    }
  };

  onAddTodo = (event, todoText) => {
    try {
      event.preventDefault();
      if (todoText) {
        this.addData(JSON.stringify({ text: todoText, isDone: false }));
      } else {
        this.setState({
          error: 'Please add text',
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
      const { todoList } = this.state;
      const i = todoList.findIndex(x => x.id === id);
      this.setState({
        todoList: [
          ...todoList.slice(0, i),
          { ...todoList[i], isDone: !todoList[i].isDone },
          ...todoList.slice(i + 1),
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
      const { todoList } = this.state;
      const i = todoList.findIndex(x => x.id === id);
      this.setState({
        todoList: [...todoList.slice(0, i), ...todoList.slice(i + 1)],
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
    const { todoList, status, error } = this.state;
    return (
      <div className="h-screen w-full flex justify-center items-center bg-teal-100 font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-2/3 lg:max-w-lg">
          {error && <div>{error}</div>}
          <TodoForm onAddTodo={this.onAddTodo} />
          <TodoList
            todoList={todoList}
            status={status}
            onCompleteTodo={this.onCompleteTodo}
            deleteTodo={this.deleteTodo}
          />
          <TodoFooter filter={this.filter} />
        </div>
      </div>
    );
  }
}
