import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './listItem';

const TodoList = ({ tasks, onDeleteTask, onUpdateTask, onChangeClassname, onPlayTimer, onStopTimer }) => {
  const listItems = tasks.map((task) => (
    <ListItem
      {...task}
      key={task.id}
      onDeleteTask={() => onDeleteTask(task.id)}
      onUpdateTask={onUpdateTask}
      onChangeClassname={onChangeClassname}
      onPlayTimer={onPlayTimer}
      onStopTimer={onStopTimer}
    />
  ));

  return <ul className="todo-list">{listItems}</ul>;
};

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
  onDeleteTask: PropTypes.func,
  onUpdateTask: PropTypes.func,
  onChangeClassname: PropTypes.func,
  onPlayTimer: PropTypes.func,
  onStopTimer: PropTypes.func,
};

export default TodoList;
