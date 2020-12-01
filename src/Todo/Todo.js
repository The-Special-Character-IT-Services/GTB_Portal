import React, { PureComponent } from 'react';
import Todofooter from './Components/Todofooter';
import Todoform from './Components/Todoform';
import Todolist from './Components/Todolist';

export default class Todo extends PureComponent {
  state = {
    error: '',
    todolist: [],
    status: 'all',
  };

  componentDidMount() {
    this.fetchData();
  }

  deleteTodo = id => {
    try {
      const { todolist } = this.state;
      const i = todolist.findIndex(x => x.id === id);
      this.setState({
        todolist: [...todolist.slice(0, i), ...todolist.slice(i + 1)],
      });
    } catch (error) {
      this.setState({
        error: 'enter a valid input',
      });
    }
  };

  fetchData = async () => {
    try {
      const data = await fetch('http://localhost:3000/todolist');
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
      const data = await fetch('http://localhost:3000/todolist', {
        method: 'POST',
        body,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      const todoitem = await data.json();
      const { todolist } = this.state;
      this.setState({
        todolist: [todoitem, ...todolist],
      });
    } catch (error) {
      this.setState({ error });
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
        error: 'enter a valid input',
      });
    }
  };

  onaddtodo = (event, todotext) => {
    try {
      event.preventDefault();
      if (todotext) {
        this.addData(JSON.stringify({ text: todotext, isDone: false }));
      } else {
        this.setState({
          error: 'enter a valid input',
          // todolist: [...todolist, { text: todotext, isDone: false, id: new Date().valueOf() }],
        });
      }
    } catch (error) {
      this.setState({
        error: 'enter a valid input',
      });
    }
  };

  filter = event => {
    this.setState({
      status: event.target.name,
    });
  };

  render() {
    const { error, todolist, status } = this.state;
    return (
      <div className="h-screen w-full flex justify-center items-center bg-teal-500 font-sans">
        <div className="bg-green-400 rounded shadow p-5 m-4 lg:w-1/2">
          {error && <div>{error}</div>}
          <Todoform onaddtodo={this.onaddtodo} />
          <Todolist
            todolist={todolist}
            status={status}
            onCompleteTodo={this.onCompleteTodo}
            deletetodo={this.deleteTodo}
          />
          <Todofooter filter={this.filter} status={status} />
        </div>
      </div>
    );
  }
}
