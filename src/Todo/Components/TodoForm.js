import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInput from '../../Components/TextInput';
import Button from '../../Components/Button';

export default class TodoForm extends Component {
  static propTypes = {
    onAddTodo: PropTypes.func.isRequired,
  };

  state = {
    todotext: '',
  };

  onChangeText = event => {
    // const { todotext } = this.state;
    this.setState({
      todotext: event.target.value,
    });
    console.log(event.target.value);
  };

  onSubmit = e => {
    const { onAddTodo } = this.props;
    const { todotext } = this.state;
    onAddTodo(e, todotext);
    this.setState({
      todotext: '',
    });
  };

  render() {
    const { todotext } = this.state;
    return (
      <div>
        <h1>Todo List</h1>
        <form onSubmit={this.onSubmit}>
          <TextInput type="text" value={todotext} onChange={this.onChangeText} />
          <Button type="submit">Add Task</Button>
        </form>
      </div>
    );
  }
}
