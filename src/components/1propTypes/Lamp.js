import React from 'react';
import PropTypes from 'prop-types';
 
function Lamp({ isDark }) {
  if (isDark) {
    return <p>Lamp is on</p>;
  }
 
  return <p>Lamp is off</p>;
}
 
Lamp.propTypes = {
  isDark: PropTypes.bool
};

export default Lamp;