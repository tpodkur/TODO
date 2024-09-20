import React from 'react';
import Task from './task';

const TodoList = ({ todos }) => {
  const listItems = todos.map(todo => {
    const { id, className, ...taskParams } = todo;
    return (
      <li className={ className } key={ id }>
        <Task { ...taskParams } />
        {/*{todo.className === 'editing' && <input type='text' className='edit' value='Editing task'/>}*/}
      </li>);
  });

  return (
    <ul className='todo-list'>
      { listItems }
    </ul>
  );
};

export default TodoList;
