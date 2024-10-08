import React from 'react';
import PropTypes from 'prop-types';

const ValidationPopup = ({ message = 'Something went wrong' }) => {
  return (
    <div className="validation-popup">
      <p className="validation-popup__message">! {message}</p>
    </div>
  );
};

export default ValidationPopup;

ValidationPopup.propTypes = {
  message: PropTypes.string,
};
