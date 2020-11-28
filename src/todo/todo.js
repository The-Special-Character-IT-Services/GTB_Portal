import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import classnames from 'classnames';
// import Ripples from 'react-ripples';
import Button from '../Components/Button';
import TextInput from '../Components/TextInput';

export default class Todo extends PureComponent {
  state = {
    todolist: [],
    todotext: '',
    status: 'all',
    error: '',
  };

  componentDidMount() {
    this.fetchData();
  }

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
      const todoItem = await data.json();
      const { todolist } = this.state;
      this.setState({
        todolist: [todoItem, ...todolist],
        todotext: '',
      });
    } catch (error) {
      this.setState({ error });
    }
  };

  deleteData = async todolist => {
    // const { todolist } = this.state;
    try {
      await fetch(`http://localhost:3000/todolist${todolist}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
    } catch (error) {
      this.setState({ error });
    }
  };

  onAddTodo = event => {
    event.preventDefault();
    const { todotext } = this.state;
    if (todotext) {
      // this.setState({
      //   todolist: [{ text: todotext, isDone: false, id: new Date().valueOf() }, ...todolist],
      //   status: 'all',
      //   todotext: '',
      //   error: '',
      //   // status: 'all';
      // });
      this.addData(JSON.stringify({ text: todotext, isDone: false }));
    } else {
      this.setState({
        error: "You didn't add text please add it ",
      });
    }
  };

  onChangeText = event => {
    this.setState({
      todotext: event.target.value,
    });
  };

  // onSubmitTodo = event => {
  //   const{} = this.state
  // }

  onDelTodo = ToBeDeleted => {
    const { todolist } = this.state;
    // console.log(ToBeDeleted);
    this.setState({
      todolist: todolist.filter(el => el !== ToBeDeleted),
    });
    this.deleteData(JSON.stringify(todolist));
  };

  filteredData = () => {
    const { todolist, status } = this.state;
    return todolist.filter(todo => {
      switch (status) {
        case 'completed':
          return todo.isDone;
        case 'pending':
          return !todo.isDone;
        default:
          return true;
      }
    });
  };

  filter = event => {
    this.setState({
      status: event.target.name,
    });
  };

  completeTodo = id => {
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
    const { todotext, error, status } = this.state;
    // const filteredData = this.filteredData
    return (
      <div className="h-screen w-full flex justify-center items-center bg-red-400 font-sans">
        <div
          style={{ borderRadius: '30px' }}
          className="bg-yellow-50 rounded shadow p-4 m-4 w-full lg:w-2/3 lg:max-w-2xl ">
          <div className="mb-4">
            <h1 className="flex justify-center items-center text-gray-900 text-xl ">Todo List</h1>
            <form className="flex mt-4" onSubmit={this.onAddTodo}>
              <TextInput value={todotext} onChange={this.onChangeText} />
              <Button type="submit" style={{ borderRadius: '30px', outline: 'none' }}>
                Add Task
              </Button>
            </form>
          </div>
          {error && <div>{error}</div>}
          <div>
            {this.filteredData().map(todo => (
              <div key={todo.id} className="flex mb-4 items-center">
                <p
                  className={classnames('w-full text-gray-900', {
                    'line-through': todo.isDone,
                  })}>
                  {todo.text}
                </p>
                <button
                  type="button"
                  style={{ borderRadius: '10px', outline: 'none' }}
                  onClick={() => this.completeTodo(todo.id)}
                  className="flex-no-shrink p-2 mr-2 ml-2 border-2 rounded w-2/5 text text-green-600 border-green-600 hover:text-white hover:bg-green-600">
                  {todo.isDone ? 'Not Done' : 'Done'}
                </button>
                <button
                  type="button"
                  style={{ borderRadius: '10px', outline: 'none' }}
                  onClick={() => {
                    this.onDelTodo(todo);
                  }}
                  className="flex-no-shrink ml-2 p-2 border-2 rounded w-1/4 text text-red-600 border-red-600 hover:text-white hover:bg-red-600">
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div>
            <button
              style={{ borderRadius: '10px', outline: 'none' }}
              className={
                status === 'all'
                  ? 'flex-no-shrink p-2 border-2 rounded mr-2 ml-2 px-2 text-white border-purple-700 bg-purple-700'
                  : 'flex-no-shrink p-2 border-2 rounded mr-2 ml-2 px-2 text-purple-700 border-purple-700 hover:text-white hover:bg-purple-700'
              }
              name="all"
              onClick={this.filter}>
              All Task
            </button>
            <button
              style={{ borderRadius: '10px', outline: 'none' }}
              className={
                status === 'pending'
                  ? ' flex-no-shrink p-2 border-2 rounded mr-2 ml-2 px-2 w-1/5 text-white border-purple-700 bg-purple-700'
                  : ' flex-no-shrink p-2 border-2 rounded mr-2 ml-2 px-2 w-1/5 text-purple-700 border-purple-700 hover:text-white hover:bg-purple-700'
              }
              name="pending"
              onClick={this.filter}>
              Pending Task
            </button>
            <button
              style={{ borderRadius: '10px', outline: 'none' }}
              className={
                status === 'completed'
                  ? ' flex-no-shrink p-2 border-2 rounded mr-2 ml-2 px-2 w-1/4 text-white border-purple-700 bg-purple-700'
                  : ' flex-no-shrink p-2 border-2 rounded mr-2 ml-2 px-2 w-1/4 text-purple-700 border-purple-700 hover:text-white hover:bg-purple-700'
              }
              name="completed"
              onClick={this.filter}>
              Completed Task
            </button>
          </div>
        </div>
      </div>
    );
  }
}
