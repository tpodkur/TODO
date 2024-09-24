import React from 'react';
import Task from './task';
import PropTypes from 'prop-types';

const ListItem = (props) => {
  return (
    <li className={ props.className }>
      <Task { ...props } />
    </li>
  );
};

ListItem.defaultProps = {
  id: '',
  description: '',
  created: '',
  className: '',
  onDeleteTask: () => {},
  onChangeClassname: () => {}
};

ListItem.propTypes = {
  id: PropTypes.string,
  description: PropTypes.string,
  created: PropTypes.string,
  className: PropTypes.string,
  onDeleteTask: PropTypes.func,
  onChangeClassname: PropTypes.func
};

export default ListItem;
