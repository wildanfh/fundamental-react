import React from "react";
import PropTypes from 'prop-types';

function Counter({ count }) {
  return <p>Antrean ke-{ count }</p>
}

Counter.propTypes = {
  count: PropTypes.number
}

export default Counter;