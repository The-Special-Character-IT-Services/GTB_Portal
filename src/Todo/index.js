import React, { Component } from 'react';
import Button from '../Components/Button';
import TextInput from '../Components/TextInput';
// import PropTypes from 'prop-types';

export default class index extends Component {
  static propTypes = {};

  state = {
    todoList: [],
    todoText: '',
  };

  onChangeText = event => {
    this.setState({
      todoText: event.target.value,
    });
  };

  onAddTodo = () => {
    const { todoList, todoText } = this.state;
    this.setState({
      todoList: [...todoList, { text: todoText, isDone: false, id: new Date().valueOf() }],
      todoText: '',
    });
  };

  completeTodo = id => {
    const { todoList } = this.state;
    const i = todoList.findIndex(x => x.id === id);
    this.setState({
      todoList: [
        ...todoList.slice(0, i),
        { ...todoList[i], isDone: !todoList[i].isDone },
        ...todoList.slice(i + 1),
      ],
    });
  };

  render() {
    const { todoText, todoList } = this.state;
    return (
      <div className="h-screen w-full flex justify-center items-center bg-teal-100 font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-2/3 lg:max-w-lg">
          <div className="mb-4">
            <h1 className="text-gray-900">Todo List</h1>
            <div className="flex mt-4">
              <TextInput value={todoText} onChange={this.onChangeText} />
              <Button onClick={this.onAddTodo}>Add Todo</Button>
            </div>
          </div>
          <div>
            {todoList.map(todo => (
              <div className="flex mb-4 items-center">
                <p className="w-full text-gray-900">{todo.text}</p>
                <button
                  type="button"
                  onClick={() => this.completeTodo(todo.id)}
                  className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-900 border-green-900 hover:bg-green-900">
                  {todo.isDone ? 'Not Done' : 'Done'}
                </button>
                <button
                  type="button"
                  className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-900 border-red-900 hover:text-white hover:bg-red-900">
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
