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

  render() {
    const { textTodo, todoList } = this.state;
    return (
      <div>
        <h1>To-Do List</h1>
        <form className="flex m-4" onSubmit={this.onAddTodo}>
          <input type="text" value={textTodo} onChange={this.onChangeText} />
          <button type="submit">SUBMIT</button>
        </form>
        <div>
          {todoList.map(item => (
            <div key={item.id}>
              <span>{item.textTodo}</span>
              <button onClick={() => this.onCompleteTodo(item.id)}>
                {item.isDone ? 'Not done' : 'Done'}
              </button>
              <button onClick={() => this.deleteTodo(item.id)}>Remove</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
