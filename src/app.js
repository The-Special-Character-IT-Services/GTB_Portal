// function component
import React from 'react';
import PropTypes from 'prop-types';

const App = ({ ear, advice }) => (
  <div>
    <h1>{ear}</h1>
    <h1>{advice}</h1>
    <input type="text" />
  </div>
);

App.propTypes = {
  ear: PropTypes.string.isRequired,
  advice: PropTypes.string,
};

App.defaultProps = {
  advice: 'fine',
};

export default App;
