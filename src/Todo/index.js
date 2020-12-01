import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';

export default class index extends PureComponent {
  state = {
    textTodo: '',
    todoList: [],
  };

  onChangeText = event => {
    this.setState({
      textTodo: event.target.value,
    });
  };

  onAddTodo = event => {
    event.preventDefault();
    const { todoList, textTodo } = this.state;

    this.setState({
      todoList: [...todoList, { textTodo, isDone: false, id: new Date().valueOf() }],
      textTodo: '',
    });
  };

  render() {
    const { textTodo } = this.state;
    return (
      <div>
        <h1>To-Do List</h1>
        <form className="flex m-4" onSubmit={this.onAddTodo}>
          <input type="text" value={textTodo} onChange={this.onChangeText} />
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    );
  }
}
