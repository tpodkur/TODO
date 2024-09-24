import React from 'react';
import Task from './task';

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

export default ListItem;
