// eslint-disable-next-line import/no-extraneous-dependencies
import React, { Component } from 'react';
// import Button from '../Components/Button';
// import TextInput from '../Components/TextInput';
// import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import classnames from 'classnames';

class Todo extends Component {
  state = {
    todolist: [],
    todotext: '',
    error: '',
    status: '',
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
      const todoitem = await data.json();
      const { todolist } = this.state;
      this.setState({
        todolist: [todoitem, ...todolist],
      });
    } catch (error) {
      this.setState({ error });
    }
  };

  deletetodo = id => {
    const { todolist } = this.state;
    const i = todolist.findIndex(x => x.id === id);
    this.setState({
      todolist: [...todolist.slice(0, i), ...todolist.slice(i + 1)],
      error: '',
    });
  };

  onChangeText = event => {
    event.preventDefault();
    this.setState({
      todotext: event.target.value,
    });
  };

  onaddtodo = event => {
    event.preventDefault();
    const { todotext } = this.state;
    if (todotext) {
      this.addData(JSON.stringify({ text: todotext, isDone: false }));
      this.setState({
        // todolist: [...todolist, { text: todotext, isDone: false, id: new Date().valueOf() }],
        todotext: '',
        error: '',
        status: 'all',
      });
    } else {
      this.setState({
        error: 'enter a valid input',
      });
    }
  };

  // onSubmit = e => {
  //   const { onaddtodo } = this.props;
  //   const { todotext } = this.state;
  //   onaddtodo(e, todotext);
  //   this.setState({ todotext: '' });
  // };
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

  filter = event => {
    this.setState({
      status: event.target.name,
    });
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

  render() {
    const { todotext, error, status } = this.state;
    return (
      <div className="h-screen w-full flex justify-center items-center bg-green-900 font-sans">
        <div className="bg-yellow-300 rounded shadow p-3 m-3 w-full lg:w-1/2 lg:max-lg">
          <div className="mb-4">
            <h1 className="text-black">Todo list</h1>
            {/* <form className='flex mt-4' onSubmit={this.onSubmit}>
              <TextInput value={todotext} onChange={this.onChangeText} />
              <button type='submit'> Add todo</button>
            </form> */}
            <form className="flex mt-4" onSubmit={this.onaddtodo}>
              <input
                value={todotext}
                onChange={this.onChangeText}
                className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-900"
              />
              <button
                type="submit"
                className="flex-no-shrink p-2 border-2 rounded  w-1/4 bg-pink-300 text-teal-900 border-teal-900 hover:text-white hover:bg-teal-900 ">
                Add todo
              </button>
            </form>
          </div>
          <div>{error}</div>
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
                  onClick={() => this.completeTodo(todo.id)}
                  className="flex p-2 ml-2 mr-1 border-2 rounded-hover: bg-green-400 text-green-900 border-green-900 hover:text-white hover:bg-green-900">
                  {todo.isDone ? 'not done' : 'done'}
                </button>
                <button
                  type="button"
                  onClick={() => this.deletetodo(todo.id)}
                  className="flex-no-shrink p-2 ml-2 border-2 rounded bg-green-400 text-red-900 border-red-900 hover:text-white hover:bg-red-900">
                  Remove
                </button>
              </div>
            ))}
            <div>
              <button
                type="text"
                name="all"
                onClick={this.filter}
                className={
                  status === 'all'
                    ? 'flex-no-shrink mr-4 p-2 border-2 rounded  w-1/4 bg-teal-900 text-white border-teal-900'
                    : 'flex-no-shrink mr-4 p-2 border-2 rounded  w-1/4 bg-blue-300 text-teal-900 border-teal-900 hover:text-white hover:bg-teal-900'
                }>
                All to do
              </button>
              <button
                type="text"
                name="pending"
                onClick={this.filter}
                className={
                  status === 'pending'
                    ? 'flex-no-shrink mr-4 p-2 border-2 rounded  w-1/4 bg-teal-900 text-white border-teal-900'
                    : 'flex-no-shrink mr-4 p-2 border-2 rounded  w-1/4 bg-blue-300 text-teal-900 border-teal-900 hover:text-white hover:bg-teal-900'
                }>
                Pending todo
              </button>
              <button
                type="text"
                name="completed"
                onClick={this.filter}
                className={
                  status === 'completed'
                    ? 'flex-no-shrink mr-4 p-2 border-2 rounded  w-1/4 bg-teal-900 text-white border-teal-900'
                    : 'flex-no-shrink mr-4 p-2 border-2 rounded  w-1/4 bg-blue-300 text-teal-900 border-teal-900 hover:text-white hover:bg-teal-900'
                }>
                Completed todo
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Todo.propTypes = {};
export default Todo;
