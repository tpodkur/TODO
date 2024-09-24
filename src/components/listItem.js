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

ListItem.propTypes = {
  id: PropTypes.string,
  description: PropTypes.string,
  created: PropTypes.instanceOf(Date),
  className: PropTypes.string,
  onDeleteTask: PropTypes.func,
  onUpdateTask: PropTypes.func,
  onChangeClassname: PropTypes.func
};

export default ListItem;
