import React from 'react';

const Task = ({ className, description, created, onChangeClassname, onDeleteTask }) => {
  return (
  <React.Fragment>
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        onChange={ onChangeClassname }
        checked={ className === 'completed' }
      />
      <label>
        <span className="description">{ description }</span>
        <span className="created">{ created }</span>
      </label>
      <button className="icon icon-edit"></button>
      <button className="icon icon-destroy" onClick={ onDeleteTask }></button>
    </div>
    { className === 'editing' && <input type='text' className='edit' defaultValue='Editing task'/> }
  </React.Fragment>
  );
}

export default Task;
