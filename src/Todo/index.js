import React, { PureComponent } from 'react';
import classnames from 'classnames';
import Button from '../Components/Button';
import TextInput from '../Components/TextInput';
// import PropTypes from 'prop-types';

export default class index extends PureComponent {
  static propTypes = {};

  state = {
    todoList: [],
    todoText: '',
    status: 'all',
  };

  onChangeText = event => {
    this.setState({
      todoText: event.target.value,
    });
  };

  onAddTodo = event => {
    event.preventDefault();
    const { todoList, todoText } = this.state;
    this.setState({
      todoList: [{ text: todoText, isDone: false, id: new Date().valueOf() }, ...todoList],
      todoText: '',
      status: 'all',
    });
  };

  onCompleteTodo = id => {
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

  deleteTodo = id => {
    const { todoList } = this.state;
    const i = todoList.findIndex(x => x.id === id);
    this.setState({
      todoList: [...todoList.slice(0, i), ...todoList.slice(i + 1)],
    });
  };

  filter = event => {
    this.setState({
      status: event.target.name,
    });
  };

  render() {
    const { todoText, todoList, status } = this.state;
    return (
      <div className="h-screen w-full flex justify-center items-center bg-teal-100 font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-2/3 lg:max-w-lg">
          <div className="mb-4">
            <h1 className="text-gray-900">Todo List</h1>
            <form className="flex mt-4" onSubmit={this.onAddTodo}>
              <TextInput value={todoText} onChange={this.onChangeText} />
              <Button type="submit">Add Todo</Button>
            </form>
          </div>
          <div>
            {todoList
              .filter(todo => {
                switch (status) {
                  case 'completed':
                    return todo.isDone;
                  case 'pending':
                    return !todo.isDone;
                  default:
                    return true;
                }
              })
              .map(todo => (
                <div key={todo.id} className="flex mb-4 items-center">
                  <p
                    className={classnames('w-full text-gray-900', {
                      'line-through': todo.isDone,
                    })}>
                    {todo.text}
                  </p>
                  <Button btnStyle="mr-2" onClick={() => this.onCompleteTodo(todo.id)}>
                    {todo.isDone ? 'Not Done' : 'Done'}
                  </Button>
                  <Button onClick={() => this.deleteTodo(todo.id)}>Remove</Button>
                </div>
              ))}
          </div>
          <div>
            <Button name="all" onClick={this.filter}>
              All Todo
            </Button>
            <Button name="pending" onClick={this.filter}>
              Pending Todo
            </Button>
            <Button name="completed" onClick={this.filter}>
              Completed Todo
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
