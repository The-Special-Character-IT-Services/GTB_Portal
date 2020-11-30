import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Textinput from '../../Components/Textinput';

class index extends PureComponent {
  static propTypes = {
    onaddtodo: PropTypes.func.isRequired,
  };

  state = {
    todotext: '',
  };

  onChangetext = event => {
    event.preventDefault();
    this.setState({
      todotext: event.target.value,
    });
  };

  onSubmit = e => {
    const { onaddtodo } = this.props;
    const { todotext } = this.state;
    onaddtodo(e, todotext);
    this.setState({
      todotext: '',
    });
  };

  render() {
    const { todotext } = this.state;
    return (
      <div className="mb-4">
        <h1 className="text-black">Todo list</h1>
        <form className="flex mb-4" onSubmit={this.onSubmit}>
          <Textinput value={todotext} onChange={this.onChangetext} />
          <button
            type="submit"
            className="flex-no-shrink mr-4 p-2 border-2 rounded  w-1/4 bg-gray-500 text-white border-teal-900 hover:text-white hover:bg-teal-900">
            Add Todo
          </button>
        </form>
      </div>
    );
  }
}
export default index;
