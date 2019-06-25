import React from 'react';
import PropTypes from 'prop-types';

const Error = (props) => {
  const { msg } = props;
  return (
    <p className='error'>{msg}</p>
  );
};

Error.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default Error;