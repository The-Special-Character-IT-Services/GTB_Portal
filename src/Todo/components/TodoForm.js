import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Textinput from '../../Components/TextInput';
import Button from '../../Components/Button';

export default class Todoform extends PureComponent {
  static propTypes = {
    onAddTodo: PropTypes.func.isRequired,
  };

  state = {
    todotext: '',
  };

  onChangetext = event => {
    this.setState({
      todotext: event.target.value,
    });
  };

  onSubmit = e => {
    const { onAddTodo } = this.props;
    const { todotext } = this.state;
    onAddTodo(e, todotext);
    this.setState({ todotext: '' });
  };

  render() {
    const { todotext } = this.state;
    return (
      <div className="mb-4">
        <h1 className="text-gray-900 flex justify-center items-center rounded">Yash TodoList</h1>
        <form className="flex mt-4" onSubmit={this.onSubmit}>
          <Textinput value={todotext} onChange={this.onChangetext} />
          <Button type="submit">Add Task</Button>
        </form>
      </div>
    );
  }
}
