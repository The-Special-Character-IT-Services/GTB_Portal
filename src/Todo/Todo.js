import React, { Component } from 'react';
// import classnames from 'classnames';

class Todo extends Component {
  state = {};

  render() {
    // eslint-disable-next-line no-unused-vars
    const { button } = this.state;
    return (
      <div className="h-screen w-full flex justify-center items-center bg-yellow-700 font-medium">
        <div className="bg-pink-400 rounded shadow p-3 m-3 w-full lg:w-1/2 lg:max-lg ">
          <div className="mb-4">
            <h1 className="text-black">Todo list</h1>
          </div>
        </div>
      </div>
    );
  }
}
export default Todo;
