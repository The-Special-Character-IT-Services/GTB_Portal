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
      todoList: [...todoList, todoText],
      todoText: '',
    });
  };

  render() {
    const { todoText } = this.state;
    return (
      <div className="h-screen w-full flex justify-center items-center bg-teal-100 font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-2/3 lg:max-w-lg">
          <div>
            <h1 className="text-gray-900">Todo List</h1>
            <div className="flex mt-4">
              <TextInput value={todoText} onChange={this.onChangeText} />
              <Button onClick={this.onAddTodo}>Add Todo</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
