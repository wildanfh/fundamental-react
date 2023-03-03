import React from 'react';
import PropTypes from 'prop-types';

// const sayHello = ({ name }) => {
//   return <p>Hello, { name }</p>
// }

// sayHello.propTypes = {
//   name: PropTypes.string.isRequired
// }

class SayHello extends React.Component {
  render() {
    const { name } = this.props;

    return <p>Hello, { name }</p>
  }
}

SayHello.propTypes = {
  name: PropTypes.string.isRequired
}

export default SayHello;