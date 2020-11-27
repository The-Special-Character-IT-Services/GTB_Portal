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
    status: 'all',
    button: true,
    button2: true,
    button3: true,
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
    const { todolist, todotext } = this.state;
    if (todotext) {
      this.setState({
        todolist: [...todolist, { text: todotext, isDone: false, id: new Date().valueOf() }],
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

  handleClick1 = event => {
    this.setState({
      status: event.target.name,
      button: false,
      button2: true,
      button3: true,
    });
  };

  handleClick2 = event => {
    this.setState({
      status: event.target.name,
      button2: false,
      button: true,
      button3: true,
    });
  };

  handleClick3 = event => {
    this.setState({
      status: event.target.name,
      button3: false,
      button: true,
      button2: true,
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
    const { todotext, error, button, button2, button3 } = this.state;
    return (
      <div className="h-screen w-full flex justify-center items-center bg-green-900 font-sans">
        <div className="bg-yellow-300 rounded shadow p-3 m-3 w-full lg:w-2/3 lg:max-lg">
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
              <div className="flex mb-4 items-center">
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
                onClick={this.handleClick1}
                className={
                  button
                    ? 'button2true flex-no-shrink mr-4 p-2 border-2 rounded  w-1/4 bg-blue-300 text-teal-900 border-teal-900 hover:text-white hover:bg-teal-900'
                    : 'button2false flex-no-shrink mr-4 p-2 border-2 rounded  w-1/4 bg-teal-900 text-white border-teal-900'
                }>
                All to do
              </button>
              <button
                type="text"
                name="pending"
                onClick={this.handleClick2}
                className={
                  button2
                    ? 'buttontrue flex-no-shrink mr-4 p-2 border-2 rounded  w-1/4 bg-blue-300 text-teal-900 border-teal-900 hover:text-white hover:bg-teal-900'
                    : 'buttonfalse flex-no-shrink mr-4 p-2 border-2 rounded  w-1/4 bg-teal-900 text-white border-teal-900'
                }>
                Pending todo
              </button>
              <button
                type="text"
                name="completed"
                onClick={this.handleClick3}
                className={
                  button3
                    ? 'button3true flex-no-shrink mr-4 p-2 border-2 rounded  w-1/4 bg-blue-300 text-teal-900 border-teal-900 hover:text-white hover:bg-teal-900'
                    : 'button3false flex-no-shrink mr-4 p-2 border-2 rounded  w-1/4 bg-teal-900 text-white border-teal-900'
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
