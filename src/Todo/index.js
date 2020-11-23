import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class index extends Component {
  //   static propTypes = {
  //     prop: PropTypes,
  //   };

  render() {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-teal-100 font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-5/6 lg:max-w-lg">
          <div className="mb-4">
            <h1 className="text-gray-900">Todo List</h1>
            <div className="flex mt-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-900"
                placeholder="Add Todo"
              />
              <button className="flex-no-shrink p-2 border-2 rounded text-teal-900 border-teal-900 hover:text-white hover:bg-teal-900">
                Add
              </button>
            </div>
          </div>
          <div>
            <div className="flex mb-4 items-center">
              <p className="w-full text-gray-900">Add another component to Tailwind Components</p>
              <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-900 border-green-900 hover:bg-green-900">
                Done
              </button>
              <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-900 border-red-900 hover:text-white hover:bg-red-900">
                Remove
              </button>
            </div>
            <div className="flex mb-4 items-center">
              <p className="w-full line-through text-green">
                Submit Todo App Component to Tailwind Components
              </p>
              <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-gray-900 border-gray-900 hover:bg-gray-900">
                Not Done
              </button>
              <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-900 border-red-900 hover:text-white hover:bg-red-900">
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
