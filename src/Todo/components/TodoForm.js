import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from '../../Components/Button';
import TextInput from '../../Components/TextInput';

export default class TodoForm extends PureComponent {
  static propTypes = {
    onAddTodo: PropTypes.func.isRequired,
  };

  state = {
    todotext: '',
  };
  // onAddTodo = event => {
  //     event.preventDefault();
  //     const { todotext, todolist } = this.state;
  //     this.setState({
  //       todolist: [...todolist, { text: todotext, id: new Date().valueOf() }],
  //       todotext: '',
  //     });
  //   };

  onSubmit = e => {
    const { onAddTodo } = this.props;
    const { todotext } = this.state;
    onAddTodo(e, todotext);
    this.setState({ todotext: '' });
  };

  onChangeText = event => {
    event.preventDefault();
    this.setState({
      todotext: event.target.value,
    });
  };

  render() {
    const { todotext } = this.state;
    return (
      <div className="mb-4">
        <h1 className="text-black">To-Do list</h1>
        <form className="flex mt-4" onSubmit={this.onSubmit}>
          <TextInput value={todotext} onChange={this.onChangeText} />
          <Button type="submit" onClick={this.onAddTodo}>
            Add Task
          </Button>
        </form>
      </div>
    );
  }
}
