import React from 'react';
import PropTypes from 'prop-types';
const App = ({ ask, ans }) => (
  <div>
    <h1>{ask}</h1>
    <h1>{ans}</h1>
    <input type='text' />
  </div>
);

App.propTypes = {
  ask: PropTypes.string.isRequired,
  ans: PropTypes.string,
};

App.defaultProps = {
  ans: 'fine',
};

export default App;
