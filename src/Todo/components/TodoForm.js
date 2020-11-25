import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TextInput from '../../Components/TextInput';
import Button from '../../Components/Button';

export default class TodoForm extends PureComponent {
  static propTypes = {
    onAddTodo: PropTypes.func.isRequired,
  };

  state = {
    todoText: '',
  };

  onChangeText = event => {
    this.setState({
      todoText: event.target.value,
    });
  };

  onSubmit = e => {
    const { onAddTodo } = this.props;
    const { todoText } = this.state;
    onAddTodo(e, todoText);
    this.setState({ todoText: '' });
  };

  render() {
    const { todoText } = this.state;
    return (
      <div className="mb-4">
        <h1 className="text-gray-900">Todo List</h1>
        <form className="flex mt-4" onSubmit={this.onSubmit}>
          <TextInput value={todoText} onChange={this.onChangeText} />
          <Button type="submit">Add Todo</Button>
        </form>
      </div>
    );
  }
}
