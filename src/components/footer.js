import React from 'react';
import TasksFilter from './tasks-filter';

const Footer = ({ onTasksFilter, onDeleteCompletedTasks }) => {
  return (
    <footer className="footer">
      <span className="todo-count">1 items left</span>
      <TasksFilter onTasksFilter={ onTasksFilter } />
      <button
        className="clear-completed"
        onClick={ onDeleteCompletedTasks }
      >
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
