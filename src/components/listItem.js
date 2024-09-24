import React from 'react';
import Task from './task';

const ListItem = (props) => {
  return (
    <li className={ props.className }>
      <Task { ...props } />
    </li>
  );
}

export default ListItem;
