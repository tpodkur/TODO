import React from 'react';
import TasksFilter from './tasks-filter';

const Footer = ({ onTasksFilter }) => {
  return (
    <footer className="footer">
      <span className="todo-count">1 items left</span>
      <TasksFilter onTasksFilter={ onTasksFilter } />
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
};

export default Footer;
