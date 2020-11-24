import React, { Component } from 'react';
import Button from '../Components/Button';
import TextInput from '../Components/TextInput';
// import PropTypes from 'prop-types';

export default class todo extends Component {
  static propTypes = {};

  state = {
    todolist: [],
    todotext: '',
  };

  onChangeText = event => {
    this.setState({
      todotext: event.target.value,
    });
  };

  onAddTodo = () => {
    const { todolist, todotext } = this.state;
    this.setState({
      todolist: [...todolist, { text: todotext, isDone: false, id: new Date().valueOf() }],
      todotext: '',
    });
  };

  onDelTodo = ToBeDeleted => {
    const { todolist, todotext } = this.state;
    console.log(ToBeDeleted);
    this.setState({
      todolist: this.state.todolist.filter(el => el !== ToBeDeleted),
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
    const { todolist, todotext } = this.state;
    return (
      <div className="h-screen w-full flex justify-center items-center bg-teal-400 font-sans">
        <div className="bg-red-100 rounded shadow p-6 m-4 w-full lg:w-2/3 lg:max-w-lg ">
          <div className="mb-4">
            <h1 className="text-gray-900 ">Todo List</h1>
            <div className="flex mt-4">
              <TextInput value={todotext} onChange={this.onChangeText} />
              <Button type="button" onClick={this.onAddTodo}>
                Add Task
              </Button>
            </div>
          </div>
          <div>
            {todolist.map(todo => (
              <div className="flex mb-4 items-center">
                <p className="w-full text-gray-900 ">{todo.text}</p>
                <button
                  type="button"
                  onClick={() => this.completeTodo(todo.id)}
                  className="flex-no-shrink p-2 mr-2 ml-2 border-2 rounded w-2/5 text text-green-800 border-green-800 hover:text-white hover:bg-green-800">
                  {todo.isDone ? 'Not Done' : 'Done'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    this.onDelTodo(todo);
                  }}
                  key={todo}
                  className="flex-no-shrink ml-2 p-2 border-2 rounded w-1/4 text text-red-800 border-red-800 hover:text-white hover:bg-red-800">
                  Remove
                </button>
              </div>
            ))}
          </div>
          <Button> All Done </Button>
          <Button> Remove All </Button>
          <Button> Filter Done </Button>
        </div>
      </div>
    );
  }
}
