import React from 'react';
import PropTypes from 'prop-types';

const App = ({ greet, message }) => (
  <div>
    <h1>{greet}</h1>
    <h1>{message}</h1>
    <input type="text" />
  </div>
);

App.prototypes = {
  greet: PropTypes.string.isRequired,
  message: PropTypes.string,
};

App.defaultProps = {
  message: 'fine',
};

export default App;
